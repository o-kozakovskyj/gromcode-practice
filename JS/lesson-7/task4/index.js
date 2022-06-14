function cloneArr(arr) {
 if (!Array.isArray(arr)) {
    return null;
  }
  return[...arr];
}
console.log(cloneArr([1, 4, 3, 6, 7]))