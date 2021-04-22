const divFactory = {
    divBoxesEl: document.querySelector('#boxes'),
    width: 30,
    height: 30,
    number: 0,
    div: "",

    onDivMarkupCreate() {
       let { div, number, width, height } = this;
        div = "";
        if (number > 0) {
            for (let i = 1; i <= number; i += 1) {
                div += `<div style="width: ${width + 10 * (i - 1)}px; height: ${height + 10 * (i - 1)}px; background-color: ${this.makeRandomRGBColor()}"></div>`;
            } return div;
        } return div;
    },

    onDivElementsRender() {
        this.divBoxesEl.innerHTML = this.onDivMarkupCreate();
    },

    onDivElementsDestroy() {
        this.divBoxesEl.innerHTML = '';
        inputEl.value = 0;
        this.number = 0;
    },

    makeRandomRGBColor() {
        const r = this.colorRandomaizer(0, 255);
        const g = this.colorRandomaizer(0, 255);
        const b = this.colorRandomaizer(0, 255);
        const colorRGB = `rgb(${r},${g},${b})`;
        return colorRGB;
    },

    colorRandomaizer(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    },
};


const divGroupEl = document.querySelectorAll('#controls');
const inputEl = divGroupEl[0].firstElementChild;
const renderBtnEl = inputEl.nextElementSibling;
const destroyBtnEl = divGroupEl[0].lastElementChild;

inputEl.addEventListener('input', onInputChange);
renderBtnEl.addEventListener('click', divFactory.onDivElementsRender.bind(divFactory));
destroyBtnEl.addEventListener('click', divFactory.onDivElementsDestroy.bind(divFactory));

function onInputChange(event) {
    divFactory.number = event.currentTarget.value;
     };

