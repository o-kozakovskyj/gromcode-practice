//algo
// get keys 1 get keys2 & compare
// iterate key1 key2 value1 value2
// if falls => return false

function compareObjects(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  return Object.keys(obj1).every(key => obj1[key] === obj2[key])
}

//---test data---
const obj1 = {
  name: 'Bob',
  sex: 'male',
  hobby: 'footbal',
  age: 17,
  adress: 'Ukraine'
};

const obj2 = {
  name: 'Bob',
  age: 17,
  sex: 'male',
  hobby: 'footbal',
  country: 'Ukraine'
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  
  sex: 'male',
  hobby: 'footbal',
  age: 17,
  adress: 'Ukraine',
  name: 'Bob',
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
