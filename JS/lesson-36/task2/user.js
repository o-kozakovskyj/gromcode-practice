/* eslint-disable camelcase */
export const renderUserData = (userData) => {
  const { avatar_url, name, location } = userData;
  const pictureSrc = document.querySelector('.user__avatar');
  const nameElem = document.querySelector('.user__name');
  const userLocationElem = document.querySelector('.user__location');
  pictureSrc.src = avatar_url;
  nameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
};
