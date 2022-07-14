
localStorage.clear()
  localStorage.setItem('obj', JSON.stringify({
    name: 'Vasya',
    age: 17,
    isMarried: false,
    ownAvto: null,
  }))

localStorage.setItem('adress', JSON.stringify('Ukraine'))
localStorage.setItem('street', JSON.stringify('Mira'))
localStorage.setItem('Nextstreet', 'Mirop')
export const getLocalStorageData = () => {

return Object.entries(localStorage)
  .reduce((newObj, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value)
    } catch(e) {
      newValue = value 
    }
      return { ...newObj, [key]: newValue };
  }, {})
  
}
console.log(getLocalStorageData())