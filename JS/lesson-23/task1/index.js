const passwordEl = document.querySelector('#password');
const emailEl = document.querySelector('#email');
const errPassword = document.querySelector('.error-text_password');
const errEmail = document.querySelector('.error-text_email');

const isRequired = (value) => {
  if (value.length > 0) {
    return undefined;
  }
  return 'Required';
};
const isEmail = (value) => {
  if (value.includes('@') === true) {
    return undefined;
  }
  return 'Should be an email';
};
const onEmailChange = (event) => {
  const errorText = [isRequired, isEmail]
    .map((validator) => validator(event.target.value))
    .filter((value) => value)
    .join(', ');
  console.log(errorText);
  errEmail.textContent = errorText;
};
emailEl.addEventListener('input', onEmailChange);

const onPasswordChange = (event) => {
  const errorText = [isRequired]
    .map((validator) => validator(event.target.value))
    .filter((errorText) => errorText)
    .join(', ');
  console.log(errPassword);
  errPassword.textContent = errorText;
};
passwordEl.addEventListener('input', onPasswordChange);

const formElem = document.querySelector('.login-form');

const onFormSubmit = (event) => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(formElem));
  alert(JSON.stringify(formData));
};
formElem.addEventListener('submit', onFormSubmit);
