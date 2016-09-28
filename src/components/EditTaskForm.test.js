import React from 'react';
import {mount} from 'enzyme';
import EditTaskForm from './EditTaskForm';

const setup = () => {
  const props = {
    title: 'Sample task',
    status: 3,
    onTaskChange: () => {},
    onTaskSave: () => {},
    onTaskCancel: () => {}
  };
  return mount(<EditTaskForm {...props} />);
};

describe('Edit task form', () => {
  it('should render the Edit task form with correct title', () => {
    const wrapper = setup();
    expect(wrapper.find('input[type="text"]').get(0).value).toBe('Sample task');
  });
});