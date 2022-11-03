const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', event =>
    inputEl.value.length === inputEl.dataset.length
        ? inputEl.classList.add('valid')
        : inputEl.classList.add('invalid')
);
    console.dir(inputEl);
