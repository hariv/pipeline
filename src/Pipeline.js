import React, { Component } from 'react';
import Stage from './Stage'
import Instruction from './Instruction'

class Pipeline extends Component {
    
    constructor(props) {
	super(props);
	this.state = {stages: props.stages, fowardingSupport: false};
	this.toggleForwardingSupport = this.toggleForwardingSupport.bind(this);
    }
    
    showDelete() {
	console.log("HELLO");
    }
    
    toggleForwardingSupport() {
	this.setState({forwardingSupport: !this.state.forwardingSupport});
    }
    
    render() {
	let stageComponents = [], stage;
	
	for(let i in this.state.stages) {
	    stage = this.state.stages[i];
	    stageComponents.push(<Stage stage={stage.name} key={stage.id}  onMouseOver={this.showDelete} />);
	}
	
	return (
		<div className="Pipeline">
		<header className="Pipeline-header">
		<h1 className="heading">Pipeline Visualizer</h1>
		<h3 className="stageHeading">Stages</h3>
		    {stageComponents}
		<br />
		Support forwarding: <input type="checkbox" onClick={this.toggleForwardingSupport}/> 
		<h3 className="instructionHeading">Add Instruction</h3>
		<Instruction forwardingSupport={this.state.forwardingSupport} />
		</header>
		</div>
		);
    }
}

export default Pipeline;