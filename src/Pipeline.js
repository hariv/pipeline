import React, { Component } from 'react';
import logo from './logo.svg';
import Stage from './Stage'

class Pipeline extends Component {
    
    constructor(props) {
	super(props);
	this.state = {stages: props.stages};
    }
    
    render() {
	let stageComponents = [], stage;
	
	for(let i in this.state.stages) {
	    stage = this.state.stages[i];
	    stageComponents.push(<Stage stage={stage.name} key={stage.id} />);
	}
	
	return (
		<div className="Pipeline">
		<header className="Pipeline-header">
		<h1 className="heading">Pipeline Visualizer</h1>
		<h3 className="subHeading">Stages</h3>
		    {stageComponents}
		</header>
		</div>
		);
    }
}

export default Pipeline;