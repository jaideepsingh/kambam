import React, { Component } from 'react';

class TaskContainer extends Component {
  render() {
    return(
      <div
        className={"card " +this.props.color}
        draggable="true"
        onDragEnd={this.props.onDragEndHandler}
        onClick={this.props.onTaskClicked}>
        <span className="task-title">{this.props.taskTitle}</span>
      </div>
    );
  }
}

export default TaskContainer;