export const delay = (time) =>
  new Promise((resolve) => {
    resolve(time);
  }).then(
    (timeToDelay) =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(timeToDelay);
        }, timeToDelay);
      })
  );

delay(3000).then(() => console.log('Done'));

