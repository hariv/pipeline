import React, { Component } from 'react';
import logo from './logo.svg';

class InstructionList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
	let instructionListComponent = [], i;
	for(i in this.state.instructionList) {
	    instructionListComponent.push(<InstructionItem item={instructionList[i]} key={i}/>);
	}
	return (<div id="instructionList">
	    {instructionListComponent}
		</div>
		);
    }
}

export default InstructionList;