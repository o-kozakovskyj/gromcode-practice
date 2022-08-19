// algo
// 1.collect Data from inputs;
// 2. test if all inputs filled;
// 3.put data to server;
// 4.get alert ;
// 5.clear forms;
const formElem = document.querySelector('.login-form');

function createUser(userData) {
  return fetch('https://62deb5ec9c47ff309e7a60a0.mockapi.io/api/v1/users1', {
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
    .then((response) => response.json())
    .then((result) => alert(JSON.stringify(result)))
    .then(() => formElem.reset());
};
formElem.addEventListener('input', onButtonSwitch);
formElem.addEventListener('submit', onFormSubmit);
