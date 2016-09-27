import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditTaskForm from '../components/EditTaskForm'
import * as boardActions from '../actions/boardActions';

class EditTaskContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      task: Object.assign({}, this.props.editableTask),
      errors: {}
    };
    this.onTaskChanged = this.onTaskChanged.bind(this);
    this.onTaskSaved = this.onTaskSaved.bind(this);
    this.onTaskCancelled = this.onTaskCancelled.bind(this);
  }

  onTaskChanged(event) {
    const updatedTask = this.state.task;
    switch(event.target.id) {
      case 'task-title':
        updatedTask.title = event.target.value;
        break;
      case 'task-status':
        updatedTask['status-id'] = parseInt(event.target.value, 10);
        break;
      default:
    }
    this.setState({
      task: updatedTask,
      errors: {}
    });
  }

  onTaskSaved() {
    this.props.updateTask(this.props.tasks, this.state.task);
    this.props.clearTask();
  }

  onTaskCancelled() {
    this.props.clearTask();
  }

  render() {
    return (
      <EditTaskForm
        title={this.state.task.title}
        status={this.state.task['status-id']}
        date={this.state.task.date}
        onTaskChange={this.onTaskChanged}
        onTaskSave={this.onTaskSaved}
        onTaskCancel={this.onTaskCancelled} />
    );
  }
}

const mapStateToProps = (state) => ({
  task: state.activeTask
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateTask: (tasks, updatedTask) => dispatch(boardActions.updateTask(tasks, updatedTask)),
    clearTask: () => dispatch(boardActions.clearTask())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskContainer);
