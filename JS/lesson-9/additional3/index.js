//algo
// get keys 1 get keys2 & compare
// iterate key1 key2 value1 value2
// if falls => return false
function compareObjects(obj1, obj2) {
  // if (Object.keys(obj1).length !== Object.keys(obj2).length) {
  //   return false;
  // }
  // return (
  //   Object.keys(obj1).join('') === Object.keys(obj2).join('') &&
  //   Object.values(obj1).join('') === Object.values(obj2).join('')
  // );
  return obj1.filter()
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
