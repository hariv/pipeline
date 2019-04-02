import React, { Component } from 'react';
import logo from './logo.svg';
import AddInstruction from './AddInstruction'
import InstructionList from './InstructionList'

class Instruction extends Component {
    
    constructor(props) {
        super(props);
        this.state = {instruction: [], destination: [], firstSource: [], secondSource: []};
	this.instructionList = ["ADD", "SUB", "MUL", "DIV"];
	this.registerList = ["R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8"];
    }
    
    render() {	
	return (
		<InstructionList />
		<AddInstruction />
		);
    }
}

export default Instruction;