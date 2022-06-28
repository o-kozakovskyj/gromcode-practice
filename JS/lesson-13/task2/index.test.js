it('shoud get only even nums', () => {
  // eslint-disable-next-line no-undef
  const result = getEvenNumbers([1, 2, 3, 4, 5, 6]);
  expect(result).toEqual([2, 4, 6]);
});
