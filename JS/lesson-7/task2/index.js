function reverseArray(numbers) {
 if (!Array.isArray(numbers)) {
    return null;
  }
  return [...numbers].reverse();
}
console.log(reverseArray([1, 4, 3, 6]))