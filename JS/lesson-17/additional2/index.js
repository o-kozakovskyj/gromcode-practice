//alg
// bind input: func, context, arg for func(unnesessary)
// output: function binded with object
// //
function.bind = function(func, context, ...args) {
 
  return function () {
 return func.apply(context, [...args]);
  }

}
const su =  {
  age: 18,
  getAge() {
    return this.age
  }
}
console.log(su.getAge(32))
const getAger = su.getAge;
const bindedAge = getAger.bind(su.getAge,su);
console.log(bindedAge())