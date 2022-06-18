const getParsedIntegers = (nums) => nums.map((num) => Number.parseInt(num, 10));
const getParsedIntegersV2 = (nums) => nums.map((num) => parseInt(num, 10));
const getParsedFloats = (nums) => nums.map((num) => Number.parseFloat(num, 10));
const getParsedFloatsV2 = (nums) => nums.map((num) => parseFloat(num, 10));

const nums = [
  1,
  3,
  -3.44,
  6.8999999,
  '12px',
  '  13  txt',
  Infinity,
  undefined,
  0,
  Infinity,
];
console.log(getParsedIntegers(nums));
console.log(getParsedIntegersV2(nums));
console.log(getParsedFloats(nums));
console.log(getParsedFloatsV2(nums));
