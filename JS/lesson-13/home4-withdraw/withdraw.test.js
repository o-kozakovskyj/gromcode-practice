import { withdraw } from './withdraw';

it('shoud return -1 if there are not anough money', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
  expect(result).toEqual(-1);
});
it('shoud get money from clients account & return a rest sum', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});
it('shoud change balances array', () => {
  const clients = ['Ann', 'John', 'User'];
  const balances = [1400, 37, -6];
  const client = 'John';
  const amount = 5;
  const result = withdraw(clients, balances, client, amount);
  expect(result).toEqual(32);
  expect(balances).toEqual([1400, 32, -6]);
});
