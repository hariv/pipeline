import React, { Component } from 'react';
import logo from './logo.svg';
import AddInstruction from './AddInstruction'
import InstructionList from './InstructionList'

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
	return (
		<div>
		<InstructionList instructionList={this.state.instructions} />
		<AddInstruction onClick={this.addNewInstruction} opcodeList={this.opcodeList} registerList={this.registerList} />
		</div>
		);
    }
}

export default Instruction;