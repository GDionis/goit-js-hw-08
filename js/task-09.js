const nameColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");


btnChangeColor.addEventListener('click', onChangeColor)

function onChangeColor() {
  bodyColor.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = `${getRandomHexColor()}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}