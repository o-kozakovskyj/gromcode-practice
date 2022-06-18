/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */
const superRound = (num, prec) => {
  const arr = [];
  arr.push(Math.floor(num * 10 ** prec) / 10 ** prec);
  arr.push(Math.trunc(num * 10 ** prec) / 10 ** prec);
  arr.push(Math.ceil(num * 10 ** prec) / 10 ** prec);
  arr.push(Math.round(num * 10 ** prec) / 10 ** prec);
  arr.push(+num.toFixed(prec));
  return arr;
};

// examples
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
