import { onCreateTask } from './createTask.js';
import { onToggleTask } from './updateTask.js';
import { deleteTask } from './tasksGateway.js';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);
  const todoListElem = document.querySelector('.list');

  todoListElem.addEventListener('click', onToggleTask);
};
