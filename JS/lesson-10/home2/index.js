/* eslint-disable no-param-reassign */
const getRandomNumbers = (length, startNum, endNum) => {
  if (Math.abs(endNum - startNum) < 1) {
    return null;
  }

  const numsArr = [];
  numsArr.length = length;
  return numsArr.fill(0).map(
    // eslint-disable-next-line no-return-assign
    (num) => (num = Math.trunc(Math.random() * (endNum - startNum) + startNum))
  );
};
console.log(getRandomNumbers(5, 1.4, 3.22));
console.log(getRandomNumbers(5, 1.4, 3.22));
console.log(getRandomNumbers(5, 1.4, 3.22));
