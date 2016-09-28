import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import { loadTasks } from '../actions/boardActions';
import { loadSpecificTask } from '../actions/boardActions';
import { loadColumns } from '../actions/boardActions';
import {mount} from 'enzyme';
import ColumnsContainer from './ColumnsContainer';

const setup = () => {
  const store = configureStore();
  store.dispatch(loadTasks());
  store.dispatch(loadSpecificTask(store.getState().tasks, 0));
  store.dispatch(loadColumns(store.getState().tasks));

  return mount(
    <Provider store={store}>
      <ColumnsContainer />
    </Provider>
  );
};

describe('Columns container', () => {
  it('should render the three columns', () => {
    const wrapper = setup();
    expect(wrapper.find('.columns-container').length).toBe(1);
    expect(wrapper.find('.column').length).toBe(3);
  });

  it('should render the Add new task form only in first column', () => {
    const wrapper = setup();
    expect(wrapper.find('.add-new-form').length).toBe(1);
    expect(wrapper.find('#column-1 .add-new-form').length).toBe(1);
  });

});