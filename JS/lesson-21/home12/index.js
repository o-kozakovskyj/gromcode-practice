export function getSection(num) {
const  spanEl = document.querySelector(`span[data-number='${num}']`);
const parentSpanEl = spanEl.closest('.box');
return parentSpanEl.dataset.section;
}
// getSection(3)