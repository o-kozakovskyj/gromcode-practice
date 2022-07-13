const weekDay = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St']
export function dayOfWeek(date, days) {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);
  return weekDay[new Date(dateInFuture).getDay()];
}
//---test data---
console.log(dayOfWeek(new Date(2020, 13, 7), 6))
console.log(dayOfWeek(new Date(2022, 0, 1), 16))
console.log(dayOfWeek(new Date(2022, 13, 7), 0))