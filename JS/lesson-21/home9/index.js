export function finishForm() {
  const form = document.querySelector('.login-form');
  const input  = document.createElement('input');
  input.name = "login"
  form.prepend(input)
const secondInput = document.querySelector('[name="password"]');
secondInput.type = "password"
}

finishForm()