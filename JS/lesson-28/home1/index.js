

export const shmoment = initDate => {
  let oldData = initDate;
  let newData = initDate;
  let years = 0;
  let month = 0;
  let date = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let milliseconds = 0;

  const hronometr = {
    add(type, data) {
      switch (type) {
        case 'years': years += data;
          break;
        case 'months': month += data;
          break;
        case 'days': date += data;
          break;
        case 'hours': hours += data;
          break;
        case 'minutes': minutes += data;
          break;
        case 'seconds': seconds += data;
          break;
        case 'milliseconds': milliseconds += data;
          break;
      }
      newData = new Date((oldData.getFullYear() + years),
        (oldData.getMonth() + month),
        (oldData.getDate() + date),
        (oldData.getHours() + hours),
        (oldData.getMinutes() + minutes),
        (oldData.getSeconds() + seconds),
        (oldData.getMilliseconds() + milliseconds))
      return this;
    },
    subtract(type, data) {
      switch (type) {
        case 'years': years -= data;
          break;
        case 'months': month -= data;
          break;
        case 'days': date -= data;
          break;
        case 'hours': hours -= data;
          break;
        case 'minutes': minutes -= data;
          break;
        case 'seconds': seconds -= data;
          break;
        case 'milliseconds': milliseconds += data;
          break;
      }
      newData = new Date((oldData.getFullYear() + years),
        (oldData.getMonth() + month),
        (oldData.getDate() + date),
        (oldData.getHours() + hours),
        (oldData.getMinutes() + minutes),
        (oldData.getSeconds() + seconds),
        (oldData.getMilliseconds() + milliseconds))

      return this;
    },
    result() {
      console.log(oldData);
      return newData;
    },
  }

  return hronometr;
}

//--- test data---

console.log(shmoment(new Date(2020, 0, 1, 1, 1)).subtract('years', 4).subtract('months', 1).subtract('months', 1).result());
// console.log(shmoment(new Date(2018, 10, 3, 0, 15)).result())