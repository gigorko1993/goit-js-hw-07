const refs = {
    input: document.querySelector('#validation-input'),
}

refs.input.addEventListener('change', onInputChange);

function onInputChange(event) {
    event.currentTarget.value.length != refs.input.dataset.length 
        ? refs.input.classList.add('invalid')
        : refs.input.classList.remove('invalid');
    
    event.currentTarget.value.length = refs.input.dataset.length
        ? refs.input.classList.add('valid')
        : refs.input.classList.remove('valid');
    
}