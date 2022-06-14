function sum(arr) {
 if (!Array.isArray(arr)) {
    return null;
  }
  return arr.reduce((acc,number) => acc+= number);
}
console.log(sum([1, 4, 3, 6, 10]))