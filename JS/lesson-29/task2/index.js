'use strict';

/**
 * @param {number} count
 * @param {number} period
 * @return {undefined}
 */
export const pinger = (count, period) => {
  let i = count - 1;
  console.log('Ping');
  const interval = setInterval(cicle, period)
  function cicle() {
    if (i > 0) {
      i--;
      console.log('Ping')
    } else {
      clearInterval(interval);
    }
    
  }
};
// examples
pinger(5, 1000); // makes 5 writes with 100 ms interval
// pinger(7, 150); // makes 7 writes with 1500 ms interval
