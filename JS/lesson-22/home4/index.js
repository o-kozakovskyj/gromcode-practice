const searchElem = document.querySelector('.search__btn');
const inputElem = document.querySelector('.search__input');
function handleClick() {
  console.log(inputElem.value)
}
searchElem.addEventListener('click', handleClick);

