import React, { Component } from 'react';

class SequenceItem extends Component { 
    render() {
	if(this.props.item.opcode) {
	    return (<div className="codeSequenceItem">
		    <span className="opcode">{this.props.item.opcode.name}</span>
		    <span className="destination">{this.props.item.destination}</span>
		    <span className="firstSource">{this.props.item.firstSource}</span>
		    <span className="secondSource">{this.props.item.secondSource}</span>
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