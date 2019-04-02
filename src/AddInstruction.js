import React, { Component } from 'react';
import logo from './logo.svg';

class AddInstruction extends Component {
    
    constructor(props) {
        super(props);
	this.opcodeList = props.opcodeList;
	this.registerList = props.registerList;
    }
    
    render() {
	let opcodeOptions = [], destinationOptions = [], firstSourceOptions = [], secondSourceOptions = [], i;
	
	for(i in this.opcodeList) {
	    opcodeOptions.push(<option key={i} value={this.opcodeList[i]}>{this.opcodeList[i]}</option>);
	}
	
	for(i in this.registerList) {
	    destinationOptions.push(<option key={i} value={this.registerList[i]}>{this.registerList[i]}</option>);
	    firstSourceOptions.push(<option key={i} value={this.registerList[i]}>{this.registerList[i]}</option>);
	    secondSourceOptions.push(<option key={i} value={this.registerList[i]}>{this.registerList[i]}</option>);
	}
	
	return (
		<span className="addInstruction">
		<select id="opcodeSelect">
		    {opcodeOptions}
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
		<button className="addInstruction" onClick={this.props.onClick}>Add Instruction</button>
		</span>
		);
    }
}

export default AddInstruction;