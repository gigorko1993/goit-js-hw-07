const refs = {
    input: document.querySelector('#font-size-control'),
    output: document.querySelector('#text'),
}

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.output.style.fontSize = `${event.currentTarget.value}px`;
}