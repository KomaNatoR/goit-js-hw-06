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

    // console.dir(refs.inputMail.value);
    // console.dir(refs.inputMail.type);

    const formData = new FormData(event.currentTarget);
    const formDataObject = {};
    formData.forEach((value, name) => {
        console.log(value);
        console.log(name);
        formDataObject[name] = value;

        // return formDataObject;
    })
console.log(formDataObject);
}