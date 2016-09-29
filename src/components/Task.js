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
        <span className="task-date">{this.props.taskDate}</span>
        <div className="task-tags">
          {this.props.taskTags.map(tag => (
            <span key={this.props.taskId + this.props.taskTitle + tag}
                  className={"tag " + (tag==="Done" ? "done": "")}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default TaskContainer;