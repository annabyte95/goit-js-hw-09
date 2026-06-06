const formData = {
    email: "",
    message: "",
}

const formElem = document.querySelector('.feedback-form');

formElem.addEventListener('input', event => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(
        'feedback-form-state',
        JSON.stringify(formData)
    );
});

const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
    const parsedData = JSON.parse(savedData);

    formData.email = parsedData.email;
    formData.message = parsedData.message;

    formElem.elements.email.value = parsedData.email;
    formElem.elements.message.value = parsedData.message;
}

formElem.addEventListener('submit', event  => {
event.preventDefault();

if (!formData.email || !formData.message) {
    alert (`Fill please all fields`);
    return;
}

console.log(formData);

formElem.reset();

localStorage.removeItem('feedback-form-state');

formData.email = '';
formData.message = '';
});
