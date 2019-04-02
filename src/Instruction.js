import React, { Component } from 'react';
import logo from './logo.svg';
import InstructionItem from './InstructionItem'

class Instruction extends Component {
    
    constructor(props) {
        super(props);
        
	this.state = {instructions: []};
	this.opcodeList = ["ADD", "SUB", "MUL", "DIV"];
	this.registerList = ["R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8"];
	this.addNewInstruction = this.addNewInstruction.bind(this);
    }
    
    addNewInstruction() {
        let opcode = document.getElementById("opcodeSelect");
        opcode = opcode.options[opcode.selectedIndex].value;

        let destination = document.getElementById("destinationSelect");
        destination = destination.options[destination.selectedIndex].value;

        let firstSource = document.getElementById("firstSourceSelect");
        firstSource = firstSource.options[firstSource.selectedIndex].value;

        let secondSource = document.getElementById("secondSourceSelect");
        secondSource = secondSource.options[secondSource.selectedIndex].value;
	
	let instructionList = JSON.parse(JSON.stringify(this.state.instructions));
	
	let instruction = [{opcode: opcode, destination: destination, firstSource: firstSource, secondSource: secondSource}];
	instructionList = instructionList.concat(instruction);
	
	this.setState({instructions: instructionList});
    }
    
    render() { 
	let instructionListComponent = [], i;
	for(i in this.state.instructions) {
	    instructionListComponent.push(<InstructionItem item={this.state.instructions[i]} key={i}/>);
	}
	
	let opcodeOptions = [], destinationOptions = [], firstSourceOptions = [], secondSourceOptions = [];
	
	for(i in this.opcodeList) {
	    opcodeOptions.push(<option key={i} value={this.opcodeList[i]}>{this.opcodeList[i]}</option>);
	}
	
	for(i in this.registerList) {
	    destinationOptions.push(<option key={i} value={this.registerList[i]}>{this.registerList[i]}</option>);
	    firstSourceOptions.push(<option key={i} value={this.registerList[i]}>{this.registerList[i]}</option>);
	    secondSourceOptions.push(<option key={i} value={this.registerList[i]}>{this.registerList[i]}</option>);
	}
	
	return (
		<div>
		<div id="instructionList">
		    {instructionListComponent}
		</div>
		<div className="addInstruction">
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
		<button className="addInstruction" onClick={this.addNewInstruction}>Add Instruction</button>
		</div>
		</div>
		);
    }
}

export default Instruction;