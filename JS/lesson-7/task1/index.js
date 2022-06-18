function squareArray(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }
  return numbers.map(number => number * number);
}
console.log(squareArray([1, 4, 3, 6]))