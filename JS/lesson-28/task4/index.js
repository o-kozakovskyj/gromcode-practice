export const compose = (...func) => value =>{
  return func.reduce((acc,func) => func(acc),value)
}
const add3 = value => value + 3;
const mult3 = value => value * 3;
const div4 = value => value / 4;
const superFunc = compose(add3, mult3, div4);
console.log(superFunc(4))