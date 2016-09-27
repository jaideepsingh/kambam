import * as types from '../actions/actionTypes';

const tasks = (state = [], action) => {
  switch(action.type) {
    case types.CREATE_TASK:
      return [...state,
        Object.assign({}, action.task)
      ];

    case types.RECEIVE_TASKS:
      return action.tasks;

    case types.UPDATE_TASK:
      return action.tasks;

    default:
      return state;
  }
};

export default tasks;