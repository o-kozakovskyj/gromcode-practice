const buttonElems = Array.from(document.querySelectorAll('.pagination__page'));
console.log(buttonElems)
function handleClick(event) {
console.log(event.target.dataset.pageNumber)
}
buttonElems.map(buttonElem => buttonElem.addEventListener('click',handleClick))
