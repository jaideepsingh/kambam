import React from 'react';
import {mount} from 'enzyme';
import Task from './Task';

const setup = () => {
  const props = {
    taskTitle: 'Sample task',
    color: 3,
    taskTags: [],
    onTaskClicked: () => {},
    onDragEndHandler: () => {}
  };
  return mount(<Task {...props} />);
};

describe('Task card', () => {
  it('should render the task card with title Sample Task', () => {
    const wrapper = setup();
    expect(wrapper.find('.card').length).toBe(1);
    expect(wrapper.find('.task-title').text()).toBe('Sample task');
  });
});