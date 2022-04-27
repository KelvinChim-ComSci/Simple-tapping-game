var cells = document.querySelectorAll("th");
var init = generateNumber();
var score = 0;

function start() {
    cells[init].style.backgroundColor = "black";
  document.getElementById("showScore").style.display = "block";
  document.getElementById("start").style.display = "none";
}

function updateScore() {
  document.getElementById("score").innerHTML = score;
}

function tableText() {
  if (this.style.backgroundColor === "black") { //Score
    this.style.backgroundColor = "white";
    num = generateNumber();
    while (cells[num].style.backgroundColor === "black" || this.id === num) {
      num = generateNumber();
    }
    cells[num].style.backgroundColor = "black"
    score++;
    updateScore();
  }
  else { //Wrong
    checkGameOver();
    num = generateNumber();
    while (cells[num].style.backgroundColor === "black") {
      num = generateNumber();
    }
    cells[num].style.backgroundColor = "black"
  }
}


for (var i = 0; i < cells.length; i++){
  cells[i].addEventListener("click", tableText)
}

function generateNumber() {
  return Math.floor(Math.random() * (16));
}

function checkGameOver() {
  var black = 0;
  for (i = 0; i < cells.length; i++) {
    if (cells[i].style.backgroundColor === "black")
      black++;
  }
  if (black >= 3) {
    alert("Game Over!");
    document.getElementById("restart").style.display = "block";
  }
}

function restart() {
  for (var i = 0; i < cells.length; i++){
    cells[i].style.backgroundColor = "white"
  }
  
  num = generateNumber();
  cells[num].style.backgroundColor = "black";
  document.getElementById("score").innerHTML = 0;
  score = 0;
  
  document.getElementById("restart").style.display = "none";
}