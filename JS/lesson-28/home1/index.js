//algo
//get operation
// get type of time
// convert to ms
// convert old Data to ms
// make operation
// return new date using ms result

// export const shmoment = (initDate) => {

const convertToMillisec = (type, number) => {
  switch (type) {
    case 'years': return number * 31536000000;
    case 'months': return number * 2592000000;
    case 'days': return number * 86400000
    case 'hours': return number * 3600000;
    case 'minutes': return number * 60000;
    case 'seconds': return number * 1000;
    case 'milliseconds': return number;
  }
}

export const shmoment = initDate => {
  let resultData = new Date(initDate).getTime();
  console.log(resultData)
  const hronometr = {
    add(type, num) {
      
      resultData += convertToMillisec(type, num);
      
      return this;
    },
    subtract(type, num) {
      resultData -= convertToMillisec(type, num);
      return this;
    },
    result() {
      return new Date(resultData);
    }
  }
  return hronometr;
}
//--- test data---
console.log(shmoment(new Date(2022, 7)).add('minutes', 2).add('years', 4).result())