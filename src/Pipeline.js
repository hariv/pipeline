import React, { Component } from 'react';
import logo from './logo.svg';
import Stage from './Stage'
//import './App.css';

class Pipeline extends Component {
  render() {
    return (
      <div className="Pipeline">
      <header className="Pipeline-header">
      <h1 className="heading">Pipeline Visualizer</h1>
      <p>
      <h3 className="subHeading">Stages</h3>
      <Stage stage="Fetch" />
      </p>
      </header>
      </div>
	    );
  }
}

export default Pipeline;