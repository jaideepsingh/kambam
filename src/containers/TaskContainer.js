import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from '../components/Task';
import * as boardActions from '../actions/boardActions';

class TaskContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editableTask: this.props.activeTask,
      dropTargetId: null
    };
    this.editTask = this.editTask.bind(this);
  }

  editTask(taskId) {
    var that = this;
    return function() {
      that.props.loadTask(that.props.tasks, taskId);
    }
  }

  //should ideally be done via color values populated through API
  getColorForTask(colorId) {
    switch(colorId) {
      case 1:
        return 'card-blue';
      case 2:
        return 'card-green';
      case 3:
        return 'card-yellow';
      case 4:
        return 'card-red';
      default:
    }
  }

  render() {
    const task = this.props.task;
    return(
      <Task color={this.getColorForTask(task['color-id'])}
            onDragEndHandler={this.props.onDragEndHandler}
            onTaskClicked={this.editTask(task.id)}
            taskTitle={task.title} />
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  activeTask: state.activeTask
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadTask: (tasks, id) => dispatch(boardActions.loadSpecificTask(tasks, id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);