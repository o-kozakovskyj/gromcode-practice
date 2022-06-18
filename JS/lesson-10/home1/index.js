/* eslint-disable no-return-assign */
const getTotalPrice = (numbers) => {
  return (
    '$' +
    Math.trunc(numbers.reduce((acc, number) => (acc += number)) * 100) / 100
  );
};
const arr = [23.44, 45.999, 67, 467, 9];
console.log(getTotalPrice(arr));
