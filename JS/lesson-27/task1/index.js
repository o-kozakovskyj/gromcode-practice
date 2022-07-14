
localStorage.clear()
  localStorage.setItem('obj', JSON.stringify({
    name: 'Vasya',
    age: 17,
    isMarried: false,
    ownAvto: null,
  }))
export const getLocalStorageData = () => {

 return JSON.parse(localStorage.getItem("obj"))
}
console.log(getLocalStorageData())