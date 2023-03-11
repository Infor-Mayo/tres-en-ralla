const board = document.querySelectorAll(".board div");
const message = document.getElementById("message");
const button = document.querySelector("button");

let player = "X";
let gameover = false;

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (board[a].textContent === player &&
        board[b].textContent === player &&
        board[c].textContent === player) {
      gameover = true;
      message.textContent = player + " wins!";
      message.style.color = (player === "X") ? "red" : "blue";
      break;
    }
  }
  if (!gameover && Array.from(board).every(cell => cell.textContent !== "")) {
    gameover = true;
    message.textContent = "Tie game!";
  }
}

function handleClick() {
  if (gameover || this.textContent !== "") return;
  this.textContent = player;
  this.style.color = (player === "X") ? "red" : "blue";
  checkWinner();
  player = (player === "X") ? "O" : "X";
}

function reset() {
  for (let i = 0; i < board.length; i++) {
    board[i].textContent = "";
    board[i].style.color = "#333";
  }
  gameover = false;
  player = "X";
  message.textContent = "";
}

board.forEach(cell => cell.addEventListener("click", handleClick));
button.addEventListener("click", reset);

