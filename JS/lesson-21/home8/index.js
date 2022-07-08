export function finishList() {
  const liOne = document.createElement('li');
  const liEight = document.createElement('li');
  const liSix = document.createElement('li');
  const liFour = document.createElement('li');
  const ul = document.querySelector('ul')
  const liFive = document.querySelector('.special')
  liEight.textContent = '8'
  liOne.textContent = '1';
  liFour.textContent = '4';
  liSix.textContent = '6';
  ul.prepend(liOne);
  ul.append(liEight);
  liFive.before(liFour);
  liFive.after(liSix);
}

// finishList()