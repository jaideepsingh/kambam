import React, { Component } from 'react';

class TaskContainer extends Component {
  render() {
    return(
      <div className={"card " +this.props.color} draggable="true" onDragEnd={this.props.onDragEndHandler} onClick={this.props.onTaskClicked}>
        <span id="task-title">{this.props.task.title}</span>
      </div>
    );
  }
}

export default TaskContainer;