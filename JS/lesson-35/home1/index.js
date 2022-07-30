export function parseUser(user) {
  try {
    return JSON.parse(user);
  } catch (e) {
    return null;
  }
}
console.log(parseUser('name: Tom'));
console.log(parseUser(JSON.stringify({ name: 'Tom' })));
