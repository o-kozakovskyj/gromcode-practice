function getProfitDays(arr, minProfit) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < minProfit) {
     arr.splice(i, 1);
    }
  }
  return arr.length;
}
arr = [2, 5, 10, 12, 14, 3];
console.log(getProfitDays(arr, 4));