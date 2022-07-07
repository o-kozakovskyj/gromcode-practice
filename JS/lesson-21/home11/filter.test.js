import { getAdults } from './filter';

it('shoud return empty object if input object is empty', () => {
  const result = getAdults({});
  expect(result).toEqual({});
});

it('shoud return people under 18', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });
});
it('shoud not chahge input object', () => {
  const data = { Ann: 56, Andrey: 7 };
  const result = getAdults(data);
  expect(data).toEqual({ Ann: 56, Andrey: 7 });
});
