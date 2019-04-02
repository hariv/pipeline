import React, { Component } from 'react';
import logo from './logo.svg';

class InstructionList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
	let instructionComponent = [], i;
	for(i in this.state.instructionList) {
	    instructionComponent.push(<InstructionItem item={instructionList[i]} key={i}/>);
	}
	return (<div id="instructionList">
	    {instructionComponent}
		</div>
		);
    }
}

export default InstructionList;