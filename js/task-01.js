const categoryEl = document.querySelectorAll('li.item');
function declOfCategory(number, words) {  
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
}
let numberOfCategory = categoryEl.length;
console.log(`В списке ${numberOfCategory} ${declOfCategory(numberOfCategory, ['категория', 'категории', 'категорий'])}.`);

for (let i = 0; i < numberOfCategory; i += 1) {
    const categoryNameEl = categoryEl[i].firstElementChild.textContent;
const categoryNumberOfElementsEl = categoryEl[i].lastElementChild.children.length;

    console.log(`\u2022 Категория: ${categoryNameEl}
\u2022 Количество элементов: ${categoryNumberOfElementsEl}`)
}

