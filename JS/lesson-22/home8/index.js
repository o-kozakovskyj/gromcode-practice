const checkElem = document.querySelector('.task-status');
function handleCheck(event) {
  console.log(checkElem.checked);
  console.log(event.target.checked);
}
checkElem.addEventListener('change', handleCheck);