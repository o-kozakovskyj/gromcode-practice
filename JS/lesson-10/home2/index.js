/* eslint-disable no-param-reassign */
const getRandomNumbers = (length, from, to) => {
  const fromCeil = Math.ceil(from);
  const toCeil = Math.ceil(to);

  if (toCeil <= fromCeil) {
    return null;
  }
  const numbersArray = Array.from(Array(length)).map(() => Math.trunc(Math.random() * (fromCeil - toCeil) + toCeil));
  return numbersArray
};
//---test data-------
console.log(getRandomNumbers(100, 10, 10));
console.log(getRandomNumbers(1, 1.999, 1.8999));
console.log(getRandomNumbers(10, 0.9, 1.1));
console.log(getRandomNumbers(500, 10, 12));
console.log(getRandomNumbers(5, 1.4, 3.22));
