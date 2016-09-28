import boardApi from '../api/board';
import * as types from './actionTypes';

const createNewTaskFromTitle = (taskTitle, id) => {
  return {
    id: id,
    title: taskTitle,
    date: new Date().toISOString(),
    "color-id": 1,
    "status-id": 1,
    tags: []
  };
};

export const receiveColumns = (columns) => {
  return{
    type: types.RECEIVE_COLUMNS,
    columns
  }
};

const getAllTasks = () => (
  boardApi.getAllTasks()
);

const getTaskById = (tasks, id) => {
  const selectedTask = tasks.filter(task => (
    id === task.id
  ));
  if(selectedTask.length) {
    return selectedTask[0];
  } else {
    return {};
  }
};

export const createTask = (task, taskId) => ({
  type: types.CREATE_TASK,
  task: createNewTaskFromTitle(task.title, taskId)
});

export const receiveTasks = (tasks) => {
  return {
    type: types.RECEIVE_TASKS,
    tasks
  }
};

export const addUpdatedTask = (tasks, updatedTask) => {
  return tasks.map(task => (
    task.id === updatedTask.id ? updatedTask : task
  ))
};

export const updateTask = (tasks, updatedTask) => {
  return {
    type: types.UPDATE_TASK,
    tasks: addUpdatedTask(tasks, updatedTask)
  }
};

export const updatedTaskTags = (tags, statusId) => {
  if(statusId === 1 || statusId === 2) {
    const doneTagIndex = tags.indexOf("Done");
    if(tags.length) {
      if(doneTagIndex > -1) {
        tags.splice(doneTagIndex, 1);
      }
      return tags;
    } else {
      return [];
    }
  } else {
    tags.push("Done");
    return tags;
  }
};

export const addNewTaskStatus = (tasks, taskId, statusId) => (
  tasks.map(task => {
    if(task.id === taskId) {
      task['status-id'] = statusId;
      task.tags = updatedTaskTags(task.tags, statusId);
    }
    return task;
  })
);

export const updateTaskStatus = (tasks, taskId, statusId) => {
  return {
    type: types.UPDATE_TASK,
    tasks: addNewTaskStatus(tasks, taskId, statusId)
  }
};

export const loadSpecificTask = (tasks, taskId) => ({
  type: types.LOAD_TASK,
  task: getTaskById(tasks, taskId)
});

export const clearTask = () => ({
  type: types.CLEAR_TASK,
  task: {}
});

export const loadTasks = () => {
  return function(dispatch) {
    return dispatch(receiveTasks(getAllTasks()));
  }
};

export const loadColumns = (tasks) => {
  return function(dispatch) {
    return dispatch(receiveColumns(boardApi.getAllColumns()));
  }
};
