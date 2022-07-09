const btnElems = Array.from(document.querySelectorAll('.btn'))
function handleClick(event) {
console.log(event.target.textContent)
}
btnElems[0].addEventListener('click', handleClick)
btnElems[1].addEventListener('click', handleClick)