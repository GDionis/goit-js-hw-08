const gallery = document.querySelector("#ingredients");
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// const ingredientList = document.querySelector('#ingredients');
// ingredientList.innerHTML = "";

// ingredients.forEach((ingredient, index) => {
//   ingredientList.innerHTML += `
//         <li class = "item"> ${ingredient}
//         </li>
//     `;
// });


const list = document.createElement('li');

const ingredientsList = ingredients.map((element) => 
  `<li class = "item"> ${element}
</li>
`).join('');
  
  gallery.insertAdjacentHTML('beforeend', ingredientsList);
  