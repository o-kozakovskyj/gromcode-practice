export function manageClasses() {
  const liOne = document.querySelector('.one');
  liOne.className += " selected";
  const liTwo = document.querySelector('.two');
  liTwo.className = "two";
  const liThree = document.querySelector('.three');
  liThree.className = "three";
  const liFour = document.querySelector('.four');
  if (liFour.className.includes('some-class')) {
    liFour.className += " another-class"
  }

}

// manageClasses()