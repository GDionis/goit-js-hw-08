const valueBtn = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action = "increment"]');
const decrementBtn = document.querySelector('[data-action = "decrement"]');

let counterValue  = 0;

const decrement = () => {
  counterValue -= 1;
  valueBtn.textContent = counterValue;
 }

const increment = () => {
  counterValue += 1;
  valueBtn.textContent = counterValue;
  }

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);