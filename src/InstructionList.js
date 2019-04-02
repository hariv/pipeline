import React, { Component } from 'react';
import logo from './logo.svg';
import InstructionItem from './InstructionItem'
class InstructionList extends Component {
    
    constructor(props) {
        super(props);
        this.instructionList = props.instructionList;
    }
    
    render() {
	let instructionListComponent = [], i;
	for(i in this.instructionList) {
	    instructionListComponent.push(<InstructionItem item={this.instructionList[i]} key={i}/>);
	}
	return (<div id="instructionList">
		</div>
		);
    }
}

export default InstructionList;