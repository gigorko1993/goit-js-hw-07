const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', (event) => { !event.currentTarget.value.replace(/\s/g, '').length
    ? refs.output.textContent = 'незнакомец'
    : refs.output.textContent = event.currentTarget.value; });