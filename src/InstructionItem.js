import React, { Component } from 'react';
import logo from './logo.svg';

class InstructionItem extends Component {
    
    constructor(props) {
        super(props);
	this.instruction = props.item.instruction;
	this.destination = props.item.destinationRegister;
	this.firstSource = props.item.firstSourceRegister;
	this.secondSource = props.item.secondSourceRegister;
    }
    
    render() {
	return (<div id="instructionItem">
		<span class="instruction">{this.instruction}</span>
		<span class="destination">{this.destinationRegister}</span>
		<span class="firstSource">{this.firstSourceRegister}</span>
		<span class="secondSource">{this.secondSourceRegister}</span>
		</div>
		);
    }
}

export default InstructionItem;