import expect from 'expect';
import taskReducer from './taskReducer';
import * as boardActions from '../actions/boardActions';

describe('Task reducer', () => {
  it('should create an active task on LOAD_TASK action', () => {
    const initialState = {};

    const tasks = [
      {id: 1, title: "Task 1 title"},
      {id: 2, title: "Task 2 title"}
    ];

    const action = boardActions.loadSpecificTask(tasks, 2);

    const newState = taskReducer(initialState, action);

    expect(newState.id).toEqual(2);
    expect(newState.title).toEqual('Task 2 title');
  });

  it('should clear the active task on CLEAR_TASK action', () => {
    const initialState = {id: 2, title: "Task 2 title"};

    const action = boardActions.clearTask();

    const newState = taskReducer(initialState, action);

    expect(newState).toEqual({});

  });

});