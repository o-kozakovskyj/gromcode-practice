import getMinSquaredNumber from './getMinSquaredNumber';

it('should get null if its not array or array length is 0', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});
it('should get null if its not array or array length is 0', () => {
  const result = getMinSquaredNumber('ererere');
  expect(result).toEqual(null);
});
it('should get min square from array', () => {
  const result = getMinSquaredNumber([4, 3, 5]);
  expect(result).toEqual(9);
});
