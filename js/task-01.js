const categoryEl = document.querySelectorAll('li.item');

function declOfCategory(number, words) {  
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
}

console.log(`В списке ${categoryEl.length} ${declOfCategory(categoryEl.length, ['категория', 'категории', 'категорий'])}.`);

function countCategory(lists) {
    return lists.forEach(element => {
        console.log(`\u2022 Категория: ${element.firstElementChild.textContent}
\u2022 Количество элементов: ${element.lastElementChild.children.length}`)
    });
};

countCategory(categoryEl);

