var audio = document.getElementById("audio");
var yesButton = document.getElementById("boton1");
var noButton = document.getElementById("boton2");
var canvas = document.getElementById("canvas");

var positionX = 0;
var positionY = 0;


function sobreMouse() {
  positionX = aleatorioX();
  positionY = aleatorioY();
  noButton.style.left = positionX + "%";
  noButton.style.top = positionY + "%";
}


function aleatorioY() {
  var resultado = Math.floor(Math.random() * (100 - 1)) + 1;
  return resultado; 
}

function aleatorioX() {
  var resultado = Math.floor(Math.random() * (100 - 1)) + 1;
  return resultado; 
}


