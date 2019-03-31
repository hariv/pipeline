import React, { Component } from 'react';
import logo from './logo.svg';
import Stage from './Stage'
//import './App.css';

class Pipeline extends Component {
    constructor(props) {
	super(props);
	this.state = {stages: props.stages}
    }
    
    render() {
	let stageComponents = [];
	
	for(stage in this.state.stages) {
	    stageComponents.push(<Stage stage={stage}>);
	}
	
	return (
		<div className="Pipeline">
		<header className="Pipeline-header">
		<h1 className="heading">Pipeline Visualizer</h1>
		<p>
		<h3 className="subHeading">Stages</h3>
		    {stageComponents}
		</p>
		</header>
		</div>
		);
    }
}

export default Pipeline;