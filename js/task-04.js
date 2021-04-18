const counterArray = {
    value: 0,

    onDecrementButtonEvent(){
        this.value -= 1;
    },
    
    onIncrementButtonEvent(){
        this.value += 1;
    },
};

const counterButtonsEl = document.querySelectorAll('#counter button');
const counterValue = document.querySelector('#value');

const decrementCounterBtn = counterButtonsEl[0];
const incrementCounterBtn = counterButtonsEl[1];

decrementCounterBtn.addEventListener('click', () => {
    counterArray.onDecrementButtonEvent();
    counterValue.textContent = counterArray.value;
});
incrementCounterBtn.addEventListener('click', () => {
    counterArray.onIncrementButtonEvent();
    counterValue.textContent = counterArray.value;
});

