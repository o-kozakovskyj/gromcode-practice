/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

export const makePromise = (value) => {
  return Promise.resolve(value);
};

/*
 * пример использования
 */
makePromise(3).then((number) => {
  console.log(number); // 17
});
