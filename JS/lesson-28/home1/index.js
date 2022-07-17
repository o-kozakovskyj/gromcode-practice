

export const shmoment = initDate => {
  let resultData = initDate;
  let year = 0;
  let month = 0;
  let date = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let milliseconds = 0;

  const whatToChange = (type, data) => {
    switch (type) {
      case 'years': year = data;
        break;
      case 'months': month = data;
        break;
      case 'days': date = data;
        break;
      case 'hours': hours = data;
        break;
      case 'minutes': minutes = data;
        break;
      case 'seconds': seconds = data;
        break;
      case 'milliseconds': milliseconds = data;
        break;
    }
  }

  const hronometr = {
    add(type, num) {
      whatToChange(type, num);
      resultData = new Date((resultData.getFullYear() + year),
        (resultData.getMonth() + month),
        (resultData.getDate() + date),
        (resultData.getHours() + hours),
        (resultData.getMinutes() + minutes),
        (resultData.getSeconds() + seconds),
        (resultData.getMilliseconds() + milliseconds))
      return this;
    },
    subtract(type, num) {
      whatToChange(type, num);
      resultData = new Date((resultData.getFullYear() - year),
        (resultData.getMonth() - month),
        (resultData.getDate() - date),
        (resultData.getHours() - hours),
        (resultData.getMinutes() - minutes),
        (resultData.getSeconds() - seconds),
        (resultData.getMilliseconds() - milliseconds))
      return this;
    },
    result() {
      return resultData;
    }
  }
  return hronometr;
}

//--- test data---
console.log(shmoment(new Date(2021, 1, 20, 20, 22)).add('years', 1).add('months', 1).subtract('hours', 10).result());
console.log(shmoment(new Date(2018, 10, 3, 0, 15)).result())