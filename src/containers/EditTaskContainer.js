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
    const newValue = event.target.value;
    switch(event.target.id) {
      case 'task-title':
        updatedTask.title = newValue;
        break;
      case 'task-color':
        updatedTask['color-id'] = parseInt(newValue, 10);
        break;
      case 'task-status':
        updatedTask['status-id'] = parseInt(newValue, 10);
        updatedTask['tags'] = boardActions.updatedTaskTags(updatedTask.tags, updatedTask['status-id']);
        break;
      case 'task-tags':
        updatedTask['tags'] = newValue.replace(/\s+/g, '').split(',');
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

  getStringifiedTags(tags) {
    return tags.join(", ");
  }

  render() {
    const task = this.state.task;
    return (
      <EditTaskForm
        title={task.title}
        status={task['status-id']}
        color={task['color-id']}
        tags={task.tags}
        date={task.date}
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
