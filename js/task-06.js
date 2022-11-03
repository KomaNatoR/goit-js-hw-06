const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', event =>
    inputEl.value.length === 6
        ? inputEl.classList.add('valid')
        : inputEl.classList.add('invalid')
);
    console.dir(inputEl);
