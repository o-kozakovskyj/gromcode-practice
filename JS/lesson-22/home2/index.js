const inputElem = document.querySelector('.text-input');
function changer() {
  console.log(inputElem.value)
}
inputElem.addEventListener('change', changer)