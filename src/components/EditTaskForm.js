import React, { Component } from 'react';

class EditTaskForm extends Component {
  render() {
    return(
      <div className="overlay-background">
        <div className="overlay-container">
          <div className="form-row">
            <label htmlFor="task-title">Task Title</label>
            <input type="text" id="task-title" value={this.props.title} onChange={this.props.onTaskChange} />
          </div>
          <div className="form-row">
            <label htmlFor="task-color">Task Color</label>
            <select id="task-color" onChange={this.props.onTaskChange} defaultValue={this.props.color}>
              <option value="1">Blue</option>
              <option value="2">Green</option>
              <option value="3">Yellow</option>
              <option value="4">Red</option>
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="task-status">Task Status</label>
            <select id="task-status" onChange={this.props.onTaskChange} defaultValue={this.props.status}>
              <option value="1">To-do</option>
              <option value="2">In Progress</option>
              <option value="3">Done</option>
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="task-tags">Task Tags (comma separated)</label>
            <input type="text" id="task-tags" value={this.props.tags} onChange={this.props.onTaskChange} />
          </div>
          <div className="form-row">
            <input type="button" className="btn-primary" value="Save" onClick={this.props.onTaskSave} />
            <input type="button" className="btn" value="Cancel" onClick={this.props.onTaskCancel} />
          </div>
        </div>
      </div>
    );
  }
}

export default EditTaskForm;