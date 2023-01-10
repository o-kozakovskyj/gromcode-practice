/* eslint-disable no-return-assign */
function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map((number) => {
    if (number % 2 === 0) {
      return (number += delta);
    }
    return number;
  });
}
console.log(increaseEvenEl([1, 4, 3, 6, 8], 5));
