export function setTitle(text) {
const titleElem = document.querySelector('.title');
titleElem.textContent = text;
return titleElem.textContent
}
console.dir(setTitle('text'));

