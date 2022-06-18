/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
const getPeople = (obj) => {
  if (Object.keys(obj).length === 0) {
    return [];
  }
  return Object.values(obj)
    .map((arr) => arr.map((person) => Object.values(person)))
    .join(',')
    .split(',');
};
const rooms = {
  room1: [{ name: 'Jack' }, { name: 'Andrey' }, { name: 'Vasyl' }],
  room2: [{ name: 'Denis' }, { name: 'Alex' }, { name: 'Max' }],
  room3: [{ name: 'Karl' }],
};
console.log(getPeople(rooms));
