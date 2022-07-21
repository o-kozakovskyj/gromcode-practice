// function sum(...numbers) {
//   return arguments.reduce((acc, num) => acc + num, 0);
// }

const async = (number, delay) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(number);
      // reject(()=> new Error(`can't calculate`));
    }, delay);
  });

// export const asyncSum = (...asyncNumber) => {
//   return Promise.all((values) => sum(...asyncNumber));
// };
async(21, 500).then((value) => console.log(value));
