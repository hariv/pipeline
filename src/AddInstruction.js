import React, { Component } from 'react';
import logo from './logo.svg';

class AddInstruction extends Component {
    
    constructor(props) {
        super(props);
        this.state = {instruction: props.instruction, destination: props.destination, firstSource: props.firstSource, secondSource: props.SecondSource};
	this.instructionList = ["ADD", "SUB", "MUL", "DIV"];
	this.registerList = ["R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8"];
    }
    
    render() {
	let instructionOptions = [], destinationOptions = [], firstSourceOptions = [], secondSourceOptions = [], i;
	
	for(i in this.instructionList) {
	    instructionOptions.push(<option key={i} value={this.instructionList[i]}>{this.instructionList[i]}</option>);
	}
	
	for(i in this.registerList) {
	    destinationOptions.push(<option key={i} value={this.registerList[i]}>{this.registerList[i]}</option>);
	    firstSourceOptions.push(<option key={i} value={this.registerList[i]}>{this.registerList[i]}</option>);
	    secondSourceOptions.push(<option key={i} value={this.registerList[i]}>{this.registerList[i]}</option>);
	}
	
	
	return (
		<span className="addInstruction">
		<select id="instructionSelect">
		    {instructionOptions}
		</select>
		<select id="destinationSelect">
                    {destinationOptions}
                </select>
		<select id="firstSourceSelect">
                    {firstSourceOptions}
                </select>
		<select id="secondSourceSelect">
                    {secondSourceOptions}
                </select>
		<button className="addInstruction">Add Instruction</button>
		</span>
		);
    }
}

export default AddInstruction;