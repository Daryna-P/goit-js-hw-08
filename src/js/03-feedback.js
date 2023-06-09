import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};
const KEY = 'feedback-form-state';
let formData = {};
populateFormData();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(evt) {
  evt.preventDefault();
  if (refs.email.value === '' || refs.message.value === '') {
    alert('Please fill the form!');
  } else {
    console.log(formData),
    evt.currentTarget.reset(), 
    localStorage.removeItem(KEY), 
    (formData = {}); }
 
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(KEY, JSON.stringify(formData));
}

function populateFormData() {
  const localData = JSON.parse(localStorage.getItem(KEY));
  if (localData) {
    if (localData.email) {
      refs.email.value = localData.email;
      formData.email = localData.email;
    }
    if (localData.message) {
      refs.message.value = localData.message;
      formData.message = localData.message;
    }
  }
}
