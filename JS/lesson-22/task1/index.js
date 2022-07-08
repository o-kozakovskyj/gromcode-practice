'use strict';

export const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = tasksList => {
  const listEl = document.querySelector('.list');

  const listItemsElements = tasksList.sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemEl = document.createElement('li');
      listItemEl.classList.add('list__item');
      if (done) {
        listItemEl.classList.add('list__item_done')
        console.log(listItemEl)
      }
      const checkEl = document.createElement('input');
      checkEl.classList.add('.list__item-checkbox');
      checkEl.setAttribute('type', 'checkbox');
      checkEl.checked = done;
      listItemEl.append(checkEl, text);
      return listItemEl;
    });
  listEl.append(...listItemsElements)
};


renderTasks(tasks)