import getSum, { getSquaredArray, getOddNumbers } from './calculator';

it('should get squared numbers', () => {
  const result = getSquaredArray([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});

it('should get odd numbers', () => {
  const result = getOddNumbers([1, 2, 3, 4]);
  expect(result).toEqual([1, 3]);
});
it('shoud get sum', () => {
  // eslint-disable-next-line no-undef
  const result = getSum(2, 3);
  expect(result).toEqual(5);
});
