function sum(numbers) {
  return numbers
    .filter((value) => !isNaN(value))
    .reduce((acc, num) => acc + num, 0);
}

const async = (number, delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(number);
      console.log(number);
    }, delay);
  });

const async1 = async(21, 500);
const async2 = async(undefined, 100);
const async3 = async(341, 100);

export const asyncSum = (...numbers) => {
  return Promise.all(numbers)
    .then((numbers) => sum(numbers))
    .catch(() => Promise.reject(new Error(`can't calculate`)));
};
asyncSum(async1, Promise.reject(new Error('err')), async3).then((value) =>
  console.log(value)
);
