const inputStr = document.querySelector('#name-input');
const spanStr = document.querySelector('#name-output');


inputStr.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === "") {
    spanStr.textContent = "Anonymous";
  } else {
    spanStr.textContent = event.currentTarget.value;
  }
}