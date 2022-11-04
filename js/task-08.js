const refs = {
    form: document.querySelector('.login-form'),
    inputMail: document.querySelector('[name="email"]'),
    inputPassword: document.querySelector('[name="password"]'),
    buttonEl: document.querySelector('[type="submit"]'),
}
// console.log(refs.buttonEl);

refs.form.addEventListener('submit', processingFormData);


function processingFormData(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;

// console.dir(formElements);
    if (formElements.email.value.trim().length === 0 || formElements.password.value.trim().length === 0) {
// console.log(formElements.password.value.trim().length);
        return alert('Не зліть мене!!!');
    } else {
// console.log(formElements.password.value.trim().length);  
        const formData = new FormData(event.currentTarget);
        const formDataObject = {};
        formData.forEach((value, name) => {

            formDataObject[name] = value;
        })

        console.log(formDataObject);
    }
    event.currentTarget.reset();
}