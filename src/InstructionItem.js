import React, { Component } from 'react';
import logo from './logo.svg';

class InstructionItem extends Component {
    
    constructor(props) {
        super(props);
	this.opcode = props.item.opcode;
	this.destination = props.item.destinationRegister;
	this.firstSource = props.item.firstSourceRegister;
	this.secondSource = props.item.secondSourceRegister;
    }
    
    render() {
	return (<div id="instructionItem">
		<span className="opcode">{this.opcode}</span>
		<span className="destination">{this.destinationRegister}</span>
		<span className="firstSource">{this.firstSourceRegister}</span>
		<span className="secondSource">{this.secondSourceRegister}</span>
		</div>
		);
    }
}

export default InstructionItem;