export const calc = initValue => {
  let result = initValue;
 const calculator = {
    add(number) {
      result += number;
      return this;
    },
    subtruct(number) {
      result -= number;
      return this;
    },
    mult(number) {
      result *= number;
      return this;
    },
    div(number) {
      result /= number;
      return this;
    },
    result() {
      return result;
   }
  }
  return calculator
}
// ------test data------

console.log(calc(3).add(2).mult(4).div(10).subtruct(5).result())
console.log(calc(3).result())