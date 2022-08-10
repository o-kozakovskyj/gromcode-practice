const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');
const checkbox = document.createElement('input');
const renderTasks = (tasksList) => {
  if (Object.keys(tasksList).length === 0) {
    return;
  }
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      checkbox.dataset.number = index;
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });
  listElem.textContent = '';
  listElem.append(...tasksElems);
};
renderTasks(tasks);

// 1. alg
//   - find checked checkbox id
//   - find checked task on id (id === index)
//   - change the property done: false/true
//  -  build list using new array

const handleChangeCheck = (event) => {
  const taskChecked = tasks[event.target.dataset.number];
  if (taskChecked.done === false) {
    taskChecked.done = true;
  } else {
    taskChecked.done = false;
  }
  renderTasks(tasks);
};
listElem.addEventListener('click', handleChangeCheck);

// 2. alg
// - if field is empty -do nothing
// - find input & text inside
// - find btn
// - add new task by btn click
// - clear input
//  - build new list using new array

const btnCreateElement = document.querySelector('.create-task-btn');
const handleAddTask = () => {
  const inputValue = document.querySelector('.task-input').value;
  if (inputValue === '') {
    return;
  }
  document.querySelector('.task-input').value = '';
  tasks.push({
    text: inputValue,
    done: false,
  });
  renderTasks(tasks);
};
btnCreateElement.addEventListener('click', handleAddTask);
