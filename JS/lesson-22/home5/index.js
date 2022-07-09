const btnElem = document.querySelector('.single-use-btn');
function handleClick() {
  console.dir('clicked')
}
btnElem.addEventListener('click', handleClick);
btnElem.removeEventListener('click', handleClick)