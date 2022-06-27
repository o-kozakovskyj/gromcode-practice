const calc = (expression) => {
  const arr = expression.split(' ');
  let result = 0;

  // eslint-disable-next-line default-case
  switch (arr[1]) {
    case '+':
      result = Number(arr[0]) + Number(arr[2]);
      break;
    case '-':
      result = arr[0] - arr[2];
      break;
    case '*':
      result = arr[0] * arr[2];
      break;
    case '/':
      result = arr[0] / arr[2];
      break;
  }
  return `${expression} = ${result}`;
};
console.log(calc('3 / 12'));
