const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output'),
};
// console.log(refs.spanEl);
refs.inputEl.addEventListener('input', event =>
    event.currentTarget.value === ''
        ? refs.spanEl.textContent = 'Anonymous'
        : refs.spanEl.textContent = event.currentTarget.value
     
);

