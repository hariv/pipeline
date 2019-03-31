import React, { Component } from 'react';
import logo from './logo.svg';

class Stage extends Component {
    render() {
	return (
		<div className="stage">
		<div className="stageName">{this.props.stage}</div>
		<button className="stageDelete">X</button>
		</div>
		);
    }
}

export default Stage;