const inputElem = document.querySelector('.name-form__input');
const btnElem = document.querySelector('.name-form__btn');
const pictureSrc = document.querySelector('.user__avatar');
const nameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const fetchUserData = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`).then((response) =>
    response.json()
  );
};

const renderUserData = (userData) => {
  const { avatar_url, name, location } = userData;
  pictureSrc.src = avatar_url;
  nameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
};

const onSearchUser = () => {
  const userName = inputElem.value;
  fetchUserData(userName).then((userData) => renderUserData(userData));
};
btnElem.addEventListener('click', onSearchUser);
