import React, { Component } from 'react';

class SequenceItem extends Component {
    
    constructor(props) {
        super(props);
	this.opcode = props.item.opcode;
	this.destination = props.item.destination;
	this.firstSource = props.item.firstSource;
	this.secondSource = props.item.secondSource;
    }
    
    render() {
	
	if(this.opcode) {
	    return (<div className="codeSequenceItem">
		    <span className="opcode">{this.opcode.name}</span>
		    <span className="destination">{this.destination}</span>
		    <span className="firstSource">{this.firstSource}</span>
		    <span className="secondSource">{this.secondSource}</span>
		    </div>
		    );
	}
	else {
	    return(<div className="codeSequenceItem">
		   <span className="nops">NOPS</span>
		   </div>);
	}
    }
}

export default SequenceItem;