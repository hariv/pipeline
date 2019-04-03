import React, { Component } from 'react';

class Stage extends Component {
    render() {
	return (
		<span className="stage">
		<span className="stageName" onMouseOver={this.props.onMouseOver}>{this.props.stage}</span>
		<button className="stageDelete">X</button>
		</span>
		);
    }
}

export default Stage;