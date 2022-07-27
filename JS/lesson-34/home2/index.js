// algo
// 1.collect Data from inputs;
// 2. test if all inputs filled;
// put data to server;
// get alert from server;
// clear forms;
const baseUrl = 'https://62deb5ec9c47ff309e7a60a0.mockapi.io/api/v1/users1';
const inputElems = document.querySelectorAll('.form-input');
const formElem = document.querySelector('.login-form');

function createUser(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
}
const onButtonSwitch = () => {
  if (formElem.reportValidity()) {
    const buttonElem = document.querySelector('.submit-button');
    console.log(formElem);
    buttonElem.removeAttribute('disabled');
  }
};
const onFormSubmit = () => {
  const formData = Object.fromEntries(new FormData(formElem));
  createUser(formData);
  alert(formData);
  formElem.reset();
};
formElem.addEventListener('input', onButtonSwitch);
formElem.addEventListener('submit', onFormSubmit);
