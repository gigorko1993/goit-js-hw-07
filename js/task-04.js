const counterArray = {
    value: 0,

    onDecrementButtonEvent(){
        this.value -= 1;
    },
    
    onIncrementButtonEvent(){
        this.value += 1;
    },
};

const refs = {
    counterValue: document.querySelector('#value'),
    decrementCounterBtn: document.querySelector('[data-action="decrement"]'),
    incrementCounterBtn: document.querySelector('[data-action="increment"]'),
};

refs.decrementCounterBtn.addEventListener('click', () => {
    counterArray.onDecrementButtonEvent();
    refs.counterValue.textContent = counterArray.value;
});

refs.incrementCounterBtn.addEventListener('click', () => {
    counterArray.onIncrementButtonEvent();
    refs.counterValue.textContent = counterArray.value;
});

