import { combineReducers } from 'redux';
import tasks from './tasksReducer';
import activeTask from './taskReducer';
import columns from './columnsReducer';

export default combineReducers({
  tasks: tasks,
  columns: columns,
  activeTask: activeTask
});