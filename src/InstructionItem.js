import React, { Component } from 'react';
import logo from './logo.svg';

class InstructionItem extends Component {
    
    constructor(props) {
        super(props);
	this.opcode = props.item.opcode;
	this.destination = props.item.destination;
	this.firstSource = props.item.firstSource;
	this.secondSource = props.item.secondSource;
    }
    
    render() {
	return (<div id="instructionItem">
		<span className="opcode">{this.opcode}</span>
		<span className="destination">{this.destination}</span>
		<span className="firstSource">{this.firstSource}</span>
		<span className="secondSource">{this.secondSource}</span>
		</div>
		);
    }
}

export default InstructionItem;