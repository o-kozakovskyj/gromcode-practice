export const withdraw = (clients, balances, client, amount) => {
  let clientBalance = balances[clients.indexOf(client)];
  if (clientBalance >= amount) {
    clientBalance -= amount;
    // eslint-disable-next-line no-param-reassign
    balances[clients.indexOf(client)] = clientBalance;
    return clientBalance;
  }

  return -1;
};

// example 1:

// input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));

// output
// 37
// и массив balances должен быть [1400, 37, -6]

// example 2:

// input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));

// output
// -1
// и массив balances должен быть [1400, 87, -6]
