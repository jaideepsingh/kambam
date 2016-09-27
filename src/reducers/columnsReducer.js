import * as types from '../actions/actionTypes';

const columns = (state = [], action) => {
  switch(action.type) {
    case types.LOAD_COLUMNS:
      return state;
    case types.RECEIVE_COLUMNS:
      return action.columns;
    default:
      return state;
  }
};

export default columns;