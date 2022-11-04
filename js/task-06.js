const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('focus', validatorFocus);
inputEl.addEventListener('blur', validatorBlur);

function validatorFocus(event) {
    console.log('focus');

    // event.preventDefault();
        
}
function validatorBlur(event) {
    console.log('blur');
    console.dir(inputEl.dataset.length);
    console.dir(inputEl.value.length);

    const inputValue = inputEl.value.trim();
    console.log(inputValue);
    if (Number(inputValue.length) !== Number(inputEl.dataset.length)) {
console.log(inputValue.length);
        inputEl.classList.remove('valid')
        inputEl.classList.add('invalid')
    } else {
console.log(inputValue.length);
        inputEl.classList.remove('invalid')
        inputEl.classList.add('valid')
    }

}
