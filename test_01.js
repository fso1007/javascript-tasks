const widthButton = document.getElementById("width-button");
const colorButton = document.getElementById("color-button");
const div = document.getElementById("square");

widthButton.addEventListener("click", changeWidth);
colorButton.addEventListener("click", changeColor);


function changeWidth() {
  let value = prompt("Choose the witdh in PX: ");
  div.style.width = `${value}px`;
};

function changeColor() {
  let value = prompt("Choose the color: ");
  div.style.background = value;
};
