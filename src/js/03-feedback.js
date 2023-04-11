import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    message: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

const KEY = 'feedback-form-state';
const formData ={};

// Form

function onFormSubmit(evt) {
    evt.preventDefault();
    if (refs.email.value === '' || refs.message.value === ''){
        alert ('Please fill the form!');
    }
    evt.target.reset();
    localStorage.removeItem(KEY);
};

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(KEY, JSON.stringify(formData));
}

// Email

function populateLocalEmail () {
    try {
        const localEmail = JSON.parse(localStorage.getItem(KEY));
        if (localEmail) {
            refs.email.value = localEmail.email;
        }
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
}
populateLocalEmail();

// Message

function populateLocalMessage() {
    try {
        const localMessage = JSON.parse(localStorage.getItem(KEY));
        if (localMessage) {
            refs.message.value = localMessage.message;
        }
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
}
populateLocalMessage(); 
