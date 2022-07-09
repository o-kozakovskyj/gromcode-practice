const divElem = document.querySelector('.rect_div')
const pElem = document.querySelector('.rect_p')
const spanElem = document.querySelector('.rect_span')
const logTarget = (text, color) => {
  const evensListItem = document.querySelector('.events-list');
  evensListItem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`

}
const logGreenDiv = logTarget.bind(null, 'DIV', 'green')
const logGreenP = logTarget.bind(null, 'P', 'green')
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green')
divElem.addEventListener('click', logGreenDiv)
pElem.addEventListener('click', logGreenP)
spanElem.addEventListener('click', logGreenSpan)


const logGreyDiv = logTarget.bind(null, 'DIV', 'grey')
const logGreyP = logTarget.bind(null, 'P', 'grey')
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey')
divElem.addEventListener('click', logGreyDiv, true)
pElem.addEventListener('click', logGreyP, true)
spanElem.addEventListener('click', logGreySpan, true)

const clearBtnElem = document.querySelector('.clear-btn');
function handleClear() {
  const evensListItem = document.querySelector('.events-list')
  evensListItem.innerHTML = "";
}
clearBtnElem.addEventListener('click', handleClear)

const removeBtnEl = document.querySelector('.remove-handlers-btn');
function handlerRemove() {
  divElem.removeEventListener('click', logGreenDiv)
  pElem.removeEventListener('click', logGreenP)
  spanElem.removeEventListener('click', logGreenSpan)
  divElem.removeEventListener('click', logGreyDiv, true)
  pElem.removeEventListener('click', logGreyP, true)
  spanElem.removeEventListener('click', logGreySpan, true)
}
removeBtnEl.addEventListener('click', handlerRemove)

const attachBtnEl = document.querySelector('.attach-handlers-btn');
function handlerAttach() {
  divElem.addEventListener('click', logGreenDiv)
  pElem.addEventListener('click', logGreenP)
  spanElem.addEventListener('click', logGreenSpan)
  divElem.addEventListener('click', logGreyDiv, true)
  pElem.addEventListener('click', logGreyP, true)
  spanElem.addEventListener('click', logGreySpan, true)
}
attachBtnEl.addEventListener('click', handlerAttach)