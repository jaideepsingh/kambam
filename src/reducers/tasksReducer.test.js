import expect from 'expect';
import tasksReducer from './tasksReducer';
import * as boardActions from '../actions/boardActions';

describe('Tasks reducer', () => {
  it('should create a new task on CREATE_TASK action', () => {
    const initialState = [
      {id: "1", title: "Task 1 title"},
      {id: "2", title: "Task 2 title"}
    ];

    const newTask = {id: "3", title: "New task title"};

    const action = boardActions.createTask(newTask, 3);

    const newState = tasksReducer(initialState, action);

    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('Task 1 title');
    expect(newState[1].title).toEqual('Task 2 title');
    expect(newState[2].title).toEqual('New task title');

  });

  it('should receive the list of tasks on RECEIVE_TASK action', () => {
    const initialState = [];

    const tasks = [
      {id: "1", title: "Task 1 title"},
      {id: "2", title: "Task 2 title"}
    ];

    const action = boardActions.receiveTasks(tasks);

    const newState = tasksReducer([], action);

    expect(newState.length).toEqual(2);

  });

  it('should update the specific task on UPDATE_TASK action', () => {
    const initialState = [
      {id: "1", title: "Task 1 title"},
      {id: "2", title: "Task 2 title"}
    ];

    const updatedTask = {id:"2", title: "New task title"};

    const action = boardActions.updateTask(initialState, updatedTask);

    const newState = tasksReducer(initialState, action);

    expect(newState.length).toEqual(2);
    expect(newState[0].title).toEqual('Task 1 title');
    expect(newState[1].title).toEqual('New task title');

  });
});