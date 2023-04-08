const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const murkup = function (array) {
  array.map(elem => {
  const liEl = document.createElement('li');
  liEl.textContent = elem;
  liEl.classList.add('item');
  return ingredientsEl.append(liEl)
})
}(ingredients);

// const murkup = ingredients.map(elem => {
//   const liEl = document.createElement('li');
//   liEl.textContent = elem;
//   liEl.classList.add('item');
//   return ingredientsEl.append(liEl)
// });





