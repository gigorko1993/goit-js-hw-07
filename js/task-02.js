const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

const liElements = ingredients.map((value) => {
    const liEl = document.createElement('li');
    liEl.textContent = value;

    return liEl;
})

ingredientsEl.append(...liElements);
