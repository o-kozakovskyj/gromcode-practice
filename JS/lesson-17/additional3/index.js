
function calculator(a, b) {
  switch (this.operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
}

/*
 * Ф-ция multiplier должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из произведение
 */
const multiplier = calculator.bind({ operation: '*' })
//---test data---
console.log(multiplier(4, 6));
console.log(multiplier(-4, 2));

/*
 * Ф-ция summator должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из сумму
 */

const summator = calculator.bind({ operation: '+' })
//---test data---
console.log(summator(4, 6));
console.log(summator(-4, 2));

/*
 * Ф-ция twice должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 1 число и возвращать это число умноженное на 2
 */

const twice = calculator.bind({ operation: '*' },2)
//---test data---
console.log(twice(4));
console.log(twice(-4));

