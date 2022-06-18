/* eslint-disable no-param-reassign */
const customers = {
  'customer-id-1': {
    name: 'Wiliam',
    age: 54,
  },
  'customer- id-2': {
    name: 'Tom',
    age: 17,
  },
  'customer-id-3': {
    name: 'Biliam',
    age: 14,
  },
};

const getCustomersList = (obj) => {
  const keysArr = Object.keys(obj);
  return Object.values(obj)
    .map((item, index) => ({ ...item, id: keysArr[index] }))
    .sort((a, b) => a.age - b.age);
};
console.log(getCustomersList(customers));
console.log(customers);
