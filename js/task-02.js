const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

const makeLiElementsFromArray = array => {
   return array.map((value) => {
        const liEl = document.createElement('li');
        liEl.textContent = value;

        return liEl;
    })

}
const liElement = makeLiElementsFromArray(ingredients);
ingredientsEl.append(...liElement);
