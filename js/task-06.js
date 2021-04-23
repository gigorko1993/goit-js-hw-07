const refs = {
    input: document.querySelector('#validation-input'),
}

refs.input.addEventListener('change', onInputChange);
const requireLength = refs.input.dataset.length;

function onInputChange(event) {
    const inputLength = event.currentTarget.value.length;
    
    inputLength == requireLength
    ? refs.input.classList.add('valid')
    : refs.input.classList.remove('valid');
    
    inputLength != requireLength 
        ? refs.input.classList.add('invalid')
        : refs.input.classList.remove('invalid');
}

console.log(refs.input.dataset.length)