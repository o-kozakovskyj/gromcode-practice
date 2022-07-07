export const getSquaredArray = (arr) => {
  return arr.map((number) => number * number);
};

export const getOddNumbers = (arr) => {
  return arr.filter((number) => number % 2 !== 0);
};

export default (a, b) => a + b;
