
localStorage.clear()
  localStorage.setItem('obj', JSON.stringify({
    name: 'Vasya',
    age: 17,
    isMarried: false,
    ownAvto: null,
  }))
const string = JSON.stringify({ adress: 'Ukraine' })
  localStorage.setItem('adress', 'Ukraine')
export const getLocalStorageData = () => {

  return JSON.parse(localStorage.getItem("obj")), localStorage.getItem("adress")
  
}
console.log(getLocalStorageData())