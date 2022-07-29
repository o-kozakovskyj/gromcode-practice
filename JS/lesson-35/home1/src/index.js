import { renderUserData } from './user.js';
import { fetchRepositories, fetchUserData } from './gateWays.js';
import { renderRepos, clearRepos } from './repos.js';
import { showSpinner, hideSpinner } from './spinner.js';

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};
renderUserData(defaultUser);
const inputElem = document.querySelector('.name-form__input');
const btnElem = document.querySelector('.name-form__btn');

const onSearchUser = () => {
  showSpinner();
  clearRepos();
  const userName = inputElem.value;
  fetchUserData(userName)
    .then((userData) => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then((url) => {
      return fetchRepositories(url);
    })
    .then((reposList) => {
      renderRepos(reposList);
    })
    .catch((err) => {
      alert(err.message);
    })
    .finally(() => {
      hideSpinner();
    });
};
btnElem.addEventListener('click', onSearchUser);
