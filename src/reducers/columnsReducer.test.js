import expect from 'expect';
import columnsReducer from './columnsReducer';
import * as boardActions from '../actions/boardActions';

describe('Columns reducer', () => {
  it('should load the columns on RECEIVE_COLUMNS action', () => {
    const initialState = [];

    const columns = [
      {id: 1, name: "Todo"},
      {id: 2, name: "Done"}
    ];

    const action = boardActions.receiveColumns(columns);

    const newState = columnsReducer(initialState, action);

    expect(newState.length).toEqual(2);
    expect(newState[0].name).toEqual('Todo');
    expect(newState[1].name).toEqual('Done');
  });
});