import { reverseArray } from './reverse';

it('shoud get null if it is not array', () => {
  const result = reverseArray('567');
  expect(result).toEqual(null);
});
it('shoud get reversed array', () => {
  const result = reverseArray([1, 3, 5]);
  expect(result).toEqual([5, 3, 1]);
});
it('shoud not change inputed array', () => {
  const arr = [1, 3, 5];
  const result = reverseArray(arr);
  expect(arr).toEqual([1, 3, 5]);
});
