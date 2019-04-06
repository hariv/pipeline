import React, { Component } from 'react';

class SequenceItem extends Component {
    
    constructor(props) {
        super(props);
	this.item = props.item;
    }
    
    render() {
	if(this.item.opcode) {
	    return (<div className="codeSequenceItem">
		    <span className="opcode">{this.item.opcode.name}</span>
		    <span className="destination">{this.item.destination}</span>
		    <span className="firstSource">{this.item.firstSource}</span>
		    <span className="secondSource">{this.item.secondSource}</span>
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