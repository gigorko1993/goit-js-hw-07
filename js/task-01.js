const categoryEl = document.querySelectorAll('li.item');
function declOfCategory(number, words) {  
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
}
let numberOfCategory = categoryEl.length;
console.log(`В списке ${numberOfCategory} ${declOfCategory(numberOfCategory, ['категория', 'категории', 'категорий'])}.`);

const categoryNameFirstEl = categoryEl[0].querySelector('h2').textContent;
const categoryNumberOfElementsFirstEl = categoryEl[0].querySelectorAll('li').length;
console.log(`\u2022 Категория: ${categoryNameFirstEl}
\u2022 Количество элементов: ${categoryNumberOfElementsFirstEl}`);

const categoryNameSecondEl = categoryEl[1].querySelector('h2').textContent;
const categoryNumberOfElementsSecondEl = categoryEl[1].querySelectorAll('li').length;
console.log(`\u2022 Категория: ${categoryNameSecondEl}
\u2022 Количество элементов: ${categoryNumberOfElementsSecondEl}`);

const categoryNameThirdEl = categoryEl[2].querySelector('h2').textContent;
const categoryNumberOfElementsThirdEl = categoryEl[2].querySelectorAll('li').length;
console.log(`\u2022 Категория: ${categoryNameThirdEl}
\u2022 Количество элементов: ${categoryNumberOfElementsThirdEl}`);