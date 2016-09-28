import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskContainer from './TaskContainer';
import EditTaskContainer from './EditTaskContainer';
import * as boardActions from '../actions/boardActions';


class ColumnsContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      newTask: {title: ""},
      dropTargetId: null
    };
    this.onAddTask = this.onAddTask.bind(this);
    this.onNewTaskTitleChange = this.onNewTaskTitleChange.bind(this);
  }

  onDragOver(event) {
    event.preventDefault();
  }

  onDrop(id) {
    const that = this;
    return function(event) {
      event.preventDefault();
      that.setState({
        dropTargetId: id
      });
    }
  }

  onDragEnd(id) {
    const that = this;
    return function(event) {
      event.preventDefault();
      if(that.state.dropTargetId) {
        that.props.updateTaskStatus(that.props.tasks, id, that.state.dropTargetId);
        that.setState({
          dropTargetId: null
        });
      }
    }
  }

  showAddNewForm(column) {
    if(column.id===1) {
      return (
        <div className="add-new-form">
          <input type="text"
                 onChange={this.onNewTaskTitleChange}
                 value={this.state.newTask.title} />
          <input type="button" value="+ Add New" onClick={this.onAddTask} />
        </div>
      );
    }
  }

  editTask(taskId) {
    var that = this;
    return function() {
      that.props.loadTask(that.props.tasks, taskId);
    }
  }

  columnLayout = (column, index) => (
    <div className="column"
         id={'column-'+column.id}
         onDragOver={this.onDragOver}
         onDrop={this.onDrop(column.id)}
         key={column.id}>

      <h3>{column.name}</h3>

      {this.showAddNewForm(column)}

      {this.props.tasks.map(task => {
        if(task['status-id'] === column.id) {
          return (
            <TaskContainer
              key={task.id}
              task={task}
              onDragEndHandler={this.onDragEnd(task.id)}
            />
          )
        } else {
          return null;
        }
      })}
    </div>
  );

  onNewTaskTitleChange(event) {
    const newTask = this.state.newTask;
    newTask.title = event.target.value;
    this.setState({newTask: newTask});
  }

  onAddTask() {
    if(this.state.newTask.title.length) {
      this.props.createTask(this.state.newTask, Math.max(...this.props.tasks.map(task => ( task.id )))+1);
      this.setState({
        newTask: {title: ""}
      });
    }
  }

  insertEditContainer = () => {
    if(!(Object.keys(this.props.activeTask).length === 0 && this.props.activeTask.constructor === Object)) {
      return (
        <EditTaskContainer
          editableTask={this.props.activeTask}
          tasks={this.props.tasks} />
      );
    } else {
      return null;
    }
  };

  render() {
    return(
      <div className="columns-container">
        {this.props.columns.map(this.columnLayout)}
        {this.insertEditContainer()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  columns: state.columns,
  tasks: state.tasks,
  activeTask: state.activeTask
});

const mapDispatchToProps = (dispatch) => {
  return {
    createTask: (task , id) => dispatch(boardActions.createTask(task, id)),
    updateTaskStatus: (tasks, taskId, statusId) => dispatch(boardActions.updateTaskStatus(tasks, taskId, statusId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ColumnsContainer);