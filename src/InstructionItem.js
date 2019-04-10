import React, { Component } from 'react';

class InstructionItem extends Component {
    render() {
	return (<div id="instructionItem">
		<span className="opcode">{this.props.item.opcode.name}</span>
		<span className="destination">{this.props.item.destination}</span>
		<span className="firstSource">{this.props.item.firstSource}</span>
		<span className="secondSource">{this.props.item.secondSource}</span>
		</div>
		);
    }
}

export default InstructionItem;