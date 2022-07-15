const input = document.querySelector('input#font-size-control');
const span = document.querySelector('#text');

input.addEventListener("input", changeFontSize);
span.style.fontSize = `${input.value}px`;
function changeFontSize() {
  span.style.fontSize = `${input.value}px`;
}