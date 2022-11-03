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

    if (Number(inputEl.value.length) !== Number(inputEl.dataset.length)) {
        inputEl.classList.remove('valid')
        inputEl.classList.add('invalid')
    } else {
        inputEl.classList.remove('invalid')
        inputEl.classList.add('valid')
    }

    // Number(inputEl.value.length) !== Number(inputEl.dataset.length)
    //     ? inputEl.classList.toggle('invalid')
    //     : inputEl.classList.toggle('valid') 
}
