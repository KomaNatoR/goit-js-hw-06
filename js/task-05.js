const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output'),
};
// const EmptyRow = '';
// console.log(EmptyRow.length);
// console.log(refs.spanEl);
refs.inputEl.addEventListener('input', event => {
    const eventValueTrim = event.currentTarget.value.trim();
    // console.log(event.currentTarget.value);
    // console.log(eventValueTrim);
    eventValueTrim.length === 0
        ? refs.spanEl.textContent = 'Anonymous'
        : refs.spanEl.textContent = eventValueTrim
     
});

