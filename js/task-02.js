const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const parentEl = document.querySelector('ul');
let arrayOfElements = [];

ingredients.forEach(element => {
  
  const itemEl = document.createElement('li');
  itemEl.textContent = element;
  itemEl.classList.add('item');
  arrayOfElements.push(itemEl);
  // parentEl.append(itemEl);
  
  // console.log(arrayOfElements);
});

parentEl.append(...arrayOfElements);

// const itemEl = document.createElement('li');
// itemEl.textContent = ingredients[0];
// itemEl.classList.add('item');
// parentEl.append(itemEl);

// console.log(parentEl);
