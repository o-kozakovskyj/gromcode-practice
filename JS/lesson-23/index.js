const passwordEl = document.querySelector('#password1');
const emailEl = document.querySelector('#email1');
const errPassword = document.querySelector('.error-text_password');
const errEmail = document.querySelector('.error-text_email');
console.log(errPassword)
const isRequired = value => {
  value
    ? undefined
    : 'Required';
}
const isEmail= value => {
  value.includes('@')
    ? undefined
    : 'Should be an email'
 }
const onEmailChange = event => {
  const errorText = [isRequired, isEmail]
    .map(validator => validator(event.target.value))
    .filter(errorText => errorText)
    .join(', ');
  console.log(errorText)
    errEmail.textContent = errorText;
}

emailEl.addEventListener('input', onEmailChange)



const onPasswordChange = event => {
  const errorText = [isRequired]
    .map(validator => validator(event.target.value))
    .filter(errorText => errorText)
    .join(', ');
    console.log(errPassword)
    errPassword.textContent = errorText;
}
passwordEl.addEventListener('input', onPasswordChange)

const formElem = document.querySelector('.login-form');
const onFormSubmit = event => {
  event.preventDefault()
  formData = Object.fromEntries(new FormData(formElem))
  alert(formData);
}
formElem.addEventListener(onFormSubmit('submit', onFormSubmit))