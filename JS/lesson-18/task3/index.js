
function sumOfSquares() {
  return [...arguments].reduce((acc, elem) => {
    return acc + elem * elem;
  }, 0);
}
//---test data---
console.log(sumOfSquares(2, 3, 6, -2))