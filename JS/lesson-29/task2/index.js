'use strict';

/**
 * @param {number} count
 * @param {number} period
 * @return {undefined}
 */
export const pinger = (count, period) => {
  console.log('ping-pong');
  const interval = setInterval(cicle, period)
  function cicle() {
    for (let i = 1; i < count; i++) {
      console.log('ping-pong')
    }
    clearInterval(interval)
    return;
  }
  return;
};
// examples
pinger(5, 100); // makes 5 writes with 100 ms interval
pinger(7, 150); // makes 7 writes with 1500 ms interval
