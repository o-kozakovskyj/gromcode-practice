const getFiniteNumbers = (nums) => {
  return nums.filter((num) => Number.isFinite(num));
};
const getFiniteNumbersV2 = (nums) => {
  return nums.filter((num) => isFinite(num));
};
const getNaN = (nums) => {
  return nums.filter((num) => Number.isNaN(num));
};
const getNaNV2 = (nums) => {
  return nums.filter((num) => isNaN(num));
};
const getIntegers = (nums) => {
  return nums.filter((num) => Number.isInteger(num));
};
const arr = [
  1,
  0,
  -0,
  'finite',
  8,
  -19,
  '',
  10.566,
  undefined,
  NaN,
  Infinity,
  -Infinity,
];
console.log(getFiniteNumbers(arr));
console.log(getFiniteNumbersV2(arr));
console.log(getNaN(arr));
console.log(getNaNV2(arr));
console.log(getIntegers(arr));
