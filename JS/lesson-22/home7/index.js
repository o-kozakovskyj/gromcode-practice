const inputEl = document.querySelector('.text-input');
function handleChange() {
  console.log(event.target.value)
}
inputEl.addEventListener('change', handleChange)