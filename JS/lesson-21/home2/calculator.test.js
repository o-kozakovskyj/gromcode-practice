import { calc } from './calculator';

it('shoud sum if plus', () => {
  const result = calc('1 + 4');
  expect(result).toEqual('1 + 4 = 5');
});
it('shoud substract if minus', () => {
  const result = calc('11 - 4');
  expect(result).toEqual('11 - 4 = 7');
});
it('shoud multiply if *', () => {
  const result = calc('11 * 4');
  expect(result).toEqual('11 * 4 = 44');
});
it('shoud divide if /', () => {
  const result = calc('12 / 4');
  expect(result).toEqual('12 / 4 = 3');
});
it('shoud get null if it is not string', () => {
  const result = calc(6756);
  expect(result).toEqual(null);
});
