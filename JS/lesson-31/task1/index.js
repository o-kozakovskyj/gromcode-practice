/**
 * @param {string} userId
 * @return {promise}
 */
export const requestUserData = (userId) => {
  const p = new Promise((resolve, rejected) => {
    setTimeout(() => {
      if (userId === 'broken') {
        rejected(new Error('User not found'));
      }
    }, 500);
    setTimeout(() => {
      if (userId === 'userid777') {
        resolve({
          name: 'John',
          age: 17,
          userId: 'userid777',
          email: 'userid777@example.com',
        });
      }
    }, 1000);
  });
  return p;
};
const user = {
  name: 'John',
  age: 17,
  userId: 'userid777',
  email: 'userid777@example',
};
// requestUserData('userid777').then((data) => console.log(data));
// requestUserData('broken').catch((error) => console.log(error));
