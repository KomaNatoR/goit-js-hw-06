const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output'),
};
// console.log(refs.spanEl);
refs.inputEl.addEventListener('input', event => {
    const eventValue = event.currentTarget.value;
    event.currentTarget.value === ''
        ? refs.spanEl.textContent = 'Anonymous'
        : refs.spanEl.textContent = eventValue.trim()
     
});

