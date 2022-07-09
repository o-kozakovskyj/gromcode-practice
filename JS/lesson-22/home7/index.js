const inputEl = document.querySelector('.text-input');
function handleChange(event) {
  console.log(event.target.value)
}

inputEl.addEventListener('change', handleChange)