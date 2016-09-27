import React, { Component } from 'react';
import ColumnsContainer from './ColumnsContainer';
import '../App.css';

class AppContainer extends Component {
  render() {
    return (
      <div className="App">
        <ColumnsContainer/>
      </div>
    );
  }
}

export default AppContainer;
