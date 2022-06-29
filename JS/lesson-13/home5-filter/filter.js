export const getAdults = (obj) => {
  const adultPerson = {};
  Object.keys(obj)
    .filter((key) => obj[key] >= 18)
    // eslint-disable-next-line no-return-assign
    .forEach((key) => (adultPerson[key] = obj[key]));
  return adultPerson;
};

// examples
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }
