import * as types from '../actions/actionTypes';

const activeTask = (state = [], action) => {
  switch(action.type) {
    case types.LOAD_TASK:
      return action.task;
    case types.CLEAR_TASK:
      return action.task;
    default:
      return state;
  }
};

export default activeTask;