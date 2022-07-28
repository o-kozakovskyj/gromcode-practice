// algo
// 1.collect Data from inputs;
// 2. test if all inputs filled;
// put data to server;
// get alert from server;
// clear forms;
const baseUrl = 'https://62deb5ec9c47ff309e7a60a0.mockapi.io/api/v1/users1';
const inputElems = document.querySelectorAll('.form-input');
const formElem = document.querySelector('.login-form');
const formData = {};

function createUser(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
}
const onButtonSwitch = (event) => {
  event.preventDefault();
  if (formElem.reportValidity()) {
    const buttonElem = document.querySelector('.submit-button');
    buttonElem.removeAttribute('disabled');
  }
  const formData = Object.fromEntries(new FormData(formElem));
  return formData;
};
const onFormSubmit = (event) => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(formElem));
  createUser(formData)
    .then((response) => alert(response))
    .then(() => formElem.reset());
};
formElem.addEventListener('input', onButtonSwitch);
formElem.addEventListener('submit', onFormSubmit);
