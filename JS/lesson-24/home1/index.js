


export const getDiff = (startDate, endDate) => {
  const msDifference = Math.abs(new Date(endDate).getTime() - new Date(startDate).getTime())
  const seconds = parseInt((msDifference / 1000) % 60);
  const minutes = parseInt((msDifference / (1000 * 60)) % 60);
  const hours = parseInt((msDifference / (1000 * 60 * 60)) % 24);
  const days = parseInt(msDifference / (1000 * 60 * 60 * 24));
  return (`${days}d ${hours}h ${minutes}m ${seconds}s`);
}

console.log(getDiff(new Date(2022, 1, 12), new Date(2022, 1, 11)));
console.log(getDiff(new Date(2020, 1), new Date(2022, 11, 12, 16, 40, 45)));
console.log(getDiff(new Date(2024, 10, 12), new Date(2020, 11, 12)));