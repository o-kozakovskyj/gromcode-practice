function getAdults(obj) {
  return Object.entries(obj)
    .filter((person) => person[1] >= 18)
    .map((person) => person[0]);
}
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));
