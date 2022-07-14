
const counterElem = document.querySelector('.counter')
const counterValueElem = document.querySelector('.counter__value')
const handleCounter = (event) => {

  if (event.target.classList.contains('counter__btn') === false) {
    return
  }
  const action = event.target.dataset.action;
  let oldValue = Number(counterValueElem.textContent)

  const newValue = action === 'decrease'
    ? oldValue - 1
    : oldValue + 1;
  localStorage.setItem('counterValue', newValue)
  counterValueElem.textContent = newValue; 
}
counterElem.addEventListener('click', handleCounter)
const onStorageChange = event => {
  counterValueElem.textContent = event.newValue;
}
window.addEventListener('storage', onStorageChange);
const onDocumentLoaded = () => {
  counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
}
document.addEventListener('DOMContentLoaded', onDocumentLoaded)