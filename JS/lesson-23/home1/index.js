const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');
const checkbox = document.createElement('input');
const renderTasks = tasksList => {
  if (Object.keys(tasksList).length === 0) {
    return
  }
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done },index) => {
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

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// put your code here
// 1. alg
//   - install id for checkbox
//   - find checked checkbox on id
//   - find checked task on id (id === index)
//   - change the property done: false/true
//   - clear list
//  -  build list using new array
const reset = (listToDo) => {
  listElem.textContent = '';
  renderTasks(listToDo);
}

const handleCheck = (event) => {
  const taskNumber = tasks[event.target.dataset.number];

  if (taskNumber.done === false) {
    taskNumber.done = true
  } else {
    taskNumber.done = false
  }
  reset(tasks);
}
listElem.addEventListener('click', handleCheck)

//2. alg
// - if field is empty -do nothing
// - find input & text inside
// - find btn
// - add new task by btn click
// - clear input
// - clear list
//  - build new list using new array

const btnCreateElement = document.querySelector('.create-task-btn');
const handleAddTask = () => {
  let inputValue = document.querySelector('.task-input').value 
  console.log(inputValue)
  if (inputValue === '') {
    return
  }
  const newTask = {
    text: inputValue,
    done: false,
  }
  console.log(document.querySelector('.task-input'))
  document.querySelector('.task-input').value = '';  // !!!
  tasks.push(newTask)
  reset(tasks);
}
btnCreateElement.addEventListener('click', handleAddTask)
