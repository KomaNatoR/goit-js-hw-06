const refs = {
    inputEl: document.querySelector('#font-size-control'),
    textEl: document.querySelector('#text'),
}

refs.inputEl.addEventListener('input', changeFontSize);

function changeFontSize(event) {
    // const px = `${refs.inputEl.value}px`;
    // console.dir(px);
    refs.textEl.style.fontSize = `${event.currentTarget.value}px`;
    // console.dir(`${refs.inputEl.value}px`);
}