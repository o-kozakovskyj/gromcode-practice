function cleanTransactionsList(arr) {
  return [...arr]
    .map((transaction) => transaction.toString().trim() / 1)
    .filter((transaction) => isNaN(transaction) === false)
    .map((transaction) => `$${transaction.toFixed(2)}`);
}

console.log(
  cleanTransactionsList([12.9, '  45.666  ', 13, '  2w5  ', 1, '4dol', '45r'])
);
