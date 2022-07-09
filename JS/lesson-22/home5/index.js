const btnElem = document.querySelector('.single-use-btn');
let counter = 0
function handleClick() {
  counter += 1;
  if (counter === 1) {
    console.log('clicked');
  }
  return
}
btnElem.addEventListener('click', handleClick);
