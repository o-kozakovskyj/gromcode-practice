/* eslint-disable no-param-reassign */

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */
function buildObject(keysList, valuesList) {
  // eslint-disable-next-line no-return-assign
  const res = {};
  // eslint-disable-next-line no-return-assign
  keysList.forEach((key, index) => (res[key] = valuesList[index]));
  return res;
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(result);
