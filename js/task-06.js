const inputStr = document.querySelector('#validation-input');

inputStr.addEventListener("blur", function( event ) {
  if (event.currentTarget.value.length === Number(inputStr.dataset.length)) {
    inputStr.classList.remove("invalid");
    return inputStr.classList.add("valid");
  } else {
    inputStr.classList.remove("valid");
    return inputStr.classList.add("invalid");
  }
}, true);
