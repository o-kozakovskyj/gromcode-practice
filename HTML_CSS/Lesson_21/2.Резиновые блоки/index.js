function uniqueCount(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }
 return numbers.filter((number, index) => {
   return numbers.indexOf(number) === index;
  }).length
}
console.log(uniqueCount([1,33, 44, 6, 6,9,9,9]))