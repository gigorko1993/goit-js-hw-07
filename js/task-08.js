const divEl = document.querySelectorAll('#controls');
const inputEl = divEl[0].firstElementChild;
const renderBtnEl = inputEl.nextElementSibling;
const destroyBtnEl = divEl[0].lastElementChild;

renderBtnEl.addEventListener('submit', onInputChange);
// refs.inputEl.addEventListener('change', onInputChange);

function onInputChange(event) {
    refs.output.style.fontSize = event.currentTarget.value;

    // const makeDivMarkup = val => {
    // const { div } = val;
    // return `
    //     <div class="element"></div>
    // `;
// }

// const makeImageFromArray = images.map(makeImagesMarkup)
//   .join('');
// galleryEl.insertAdjacentHTML('beforeend', makeImageFromArray);
}

const makeRandomRGBColor = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const r = makeRandomRGBColor(0, 255);
const g = makeRandomRGBColor(0, 255);
const b = makeRandomRGBColor(0, 255);
const colorRGB = `rgb(${r},${g},${b})`;