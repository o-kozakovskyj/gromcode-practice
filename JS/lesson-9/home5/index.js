/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const getTotalRevenue = (transactions) => {
  const sum = [];
  transactions.forEach((element) => {
    sum.push(element.amount);
  });
  return sum.reduce((acc, amount) => (acc += amount));
};

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
console.log(result);
