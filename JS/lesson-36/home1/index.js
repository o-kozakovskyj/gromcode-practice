/**
 * @param {string[]} users
 * @return {promise}
 */

export const getUsersBlogs = async (users) => {
  const usersList = users.map((user) =>
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then(({ blog }) => blog)
  );
  const arr = await Promise.all(usersList);
  return arr;
};

// examples
getUsersBlogs(['google', 'facebook', 'reactjs']).then((linksList) =>
  console.log(linksList)
); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then((linksList) => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
