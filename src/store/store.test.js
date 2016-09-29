import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import * as boardActions from '../actions/boardActions';

describe('Store', () => {
  it('should handle adding new tasks', () => {
    const store = createStore(rootReducer);

    const task = {title: "New task"};

    const action = boardActions.createTask(task, 1);
    store.dispatch(action);

    const actualState = store.getState().tasks[0];

    expect(actualState.title).toEqual('New task');
    expect(actualState['color-id']).toEqual(1);
    expect(actualState['status-id']).toEqual(1);
    expect(actualState.tags.length).toEqual(0);
  });
});