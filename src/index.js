import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppContainer from './containers/AppContainer';
import { loadTasks } from './actions/boardActions';
import { loadSpecificTask } from './actions/boardActions';
import { loadColumns } from './actions/boardActions';
import './index.css';

const store = configureStore();

store.dispatch(loadTasks());
//Using dispatcher to set the active task as null on page load
store.dispatch(loadSpecificTask(store.getState().tasks, 0));
store.dispatch(loadColumns(store.getState().tasks));

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
