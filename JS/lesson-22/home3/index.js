const checkElrm = document.querySelector('.task-status');
function handleChanger() {
  checkElrm.checked === true ? console.log(true) : console.log(false)
  console.log(checkElrm.value)
}
checkElrm.addEventListener('change', handleChanger);