export function getTitle() {
  const titleElement = document.querySelector('.title');
  return titleElement.textContent;
}
console.dir(getTitle())
export function getDescription() {
  const descriptionElement = document.querySelector('.about');
  return descriptionElement.innerText;
}
console.dir(getDescription())

export function getPlans() {
  const plansElement = document.querySelector('.plans');
  return plansElement.innerHTML;
}
console.dir(getPlans())

export function getGoal() {
  const goalElement = document.querySelector('.goal');
  return goalElement.outerHTML;
}

console.dir(getGoal())
