export default function (arr) {
  if (Array.isArray(arr) === false || arr.length === 0) {
    return null;
  }
  return arr.map((num) => num * num).sort((a, b) => a - b)[0];
}
const arr = [1, 5, 3, 7];
console.log(arr);
