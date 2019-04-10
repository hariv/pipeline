import React, { Component } from 'react';
import InstructionItem from './InstructionItem'
import SequenceItem from './SequenceItem'
class Instruction extends Component {
    
    constructor(props) {
        super(props);
        
	this.state = {instructions: [], codeSequence: []};
	
	this.registerWriteReadGap = props.registerWriteReadGap;
	this.forwardingSupport = false;
	
	this.opcodeList = [{name: "ADD", type: "ALU"}, 
			   {name: "SUB", type: "ALU"}, 
			   {name: "MUL", type: "ALU"}, 
			   {name: "DIV", type: "ALU"},
			   {name: "AND", type: "ALU"},
			   {name: "OR", type: "ALU"},
			   {name: "XOR", type: "ALU"},
			   {name: "LW", type: "MEM"},
			   {name: "SW", type: "MEM"}];
	
	this.registerList = ["R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R10", "R11", "R12", "R13", "R14", "R15", "R16"];
	this.addNewInstruction = this.addNewInstruction.bind(this);
	this.removeInstruction = this.removeInstruction.bind(this);
	this.getExecutionSequence = this.getExecutionSequence.bind(this);
	this.change = this.change.bind(this);
	this.toggleForwardingSupport = this.toggleForwardingSupport.bind(this);
    }
    
    removeInstruction() {
	let instructionList;
	instructionList = JSON.parse(JSON.stringify(this.state.instructions));
	
	instructionList.pop();
	
	//this.setState({instructions: instructionList});
	this.setState(state => ({
		    instructions: instructionList
		}));
    }
    
    toggleForwardingSupport() {
	this.forwardingSupport = !this.forwardingSupport;
	this.getExecutionSequence();
    }
    
    addNewInstruction() {
	let opcode, destination, firstSource, secondSource, instruction, instructionList, firstReg, secondReg, thirdReg;
	
        opcode = document.getElementById("opcodeSelect");
	opcode = JSON.parse(opcode.options[opcode.selectedIndex].value);

        firstReg = document.getElementById("firstRegisterSelect");
        firstReg = firstReg.options[firstReg.selectedIndex].value;

        secondReg = document.getElementById("secondRegisterSelect");
        secondReg = secondReg.options[secondReg.selectedIndex].value;

        thirdReg = document.getElementById("thirdRegisterSelect");
        thirdReg = thirdReg.options[thirdReg.selectedIndex].value;
	
	destination = firstReg;
	firstSource = secondReg;
	secondSource = thirdReg;
	
	if(opcode.name === "SW") {
	    firstSource = firstReg;
	    destination = undefined;
	}
	
	if(opcode.name === "LW")
	    firstSource = undefined;
	
	instructionList = JSON.parse(JSON.stringify(this.state.instructions));
	
	instruction = [{opcode: opcode, destination: destination, firstSource: firstSource, secondSource: secondSource}];
	instructionList = instructionList.concat(instruction);
	
	//this.setState({instructions: instructionList});
	this.setState(state => ({
		    instructions: instructionList
		}));
    }
    
    isDependent(earlierInstruction, laterInstruction) {
	return (earlierInstruction.destination === laterInstruction.firstSource || earlierInstruction.destination === laterInstruction.secondSource);
    }
    
    buildInstructionDependencyList() {
	let numInstructions, instructionDependencyList = [], i, j;
	numInstructions = this.state.instructions.length;
	for(i=0;i<numInstructions;i++)
	    for(j=i+1;j<numInstructions;j++)
		if(this.isDependent(this.state.instructions[i], this.state.instructions[j])) {
		    instructionDependencyList[i] = j;
		    break;
		}
	return instructionDependencyList;
    }
    
    
    getExecutionSequence() {
	let instructionDependencyList = this.buildInstructionDependencyList();
	this.insertNOPS(instructionDependencyList);
    }
    
    insertNOPS(instructionDependencyList) {
	
	let executionSequence = [], i, j, k, earlierInstruction, laterInstruction, numNops = 0;
	
	for(i=0;i<this.state.instructions.length;i++) {
	    earlierInstruction = this.state.instructions[i];
	    console.log(earlierInstruction);
	    executionSequence.push(this.state.instructions[i]);
	    if(instructionDependencyList[i]) {
		j = instructionDependencyList[i];
		laterInstruction = this.state.instructions[j];
		numNops = this.registerWriteReadGap-(j-i)+1;
		if(earlierInstruction.opcode.type === "ALU" && this.forwardingSupport)
		    numNops -= 2;
		else if(earlierInstruction.opcode.type === "MEM" && laterInstruction.opcode.type === "ALU" && this.forwardingSupport)
		    numNops--;
		for(k=0;k<numNops;k++)
		    executionSequence.push("NOPS");
	    }
	}
	//this.setState({codeSequence: executionSequence});
	this.setState(state => ({
		    codeSequence: executionSequence
		}));
    }
    
    change() {
	let opcode;
	opcode = document.getElementById("opcodeSelect");
        opcode = JSON.parse(opcode.options[opcode.selectedIndex].value);
	
	if(opcode.name === "LW")
	    //this.setState({memory: "load"});
	    this.setState(state => ({
			memory: "load"
		    }));
	else if(opcode.name === "SW")
	    //this.setState({memory: "store"});
	    this.setState(state => ({
			memory: "store"
		    }));
	else
	    this.setState(state => ({
			memory: undefined
		    }));
	    //this.setState({memory: undefined});
    }
    
    render() { 
	let instructionListComponent = [], opcodeOptions = [], destinationOptions = [], firstSourceOptions = [], secondSourceOptions = [], codeSequenceComponent = [], i;
	for(i in this.state.instructions) {
	    instructionListComponent.push(<InstructionItem item={this.state.instructions[i]} key={i}/>);
	}
	
	for(i in this.opcodeList) {
	    opcodeOptions.push(<option key={i} value={JSON.stringify(this.opcodeList[i])}>{this.opcodeList[i].name}</option>);
	}
	
	for(i in this.registerList) {
	    destinationOptions.push(<option key={i} value={this.registerList[i]}>{this.registerList[i]}</option>);
	    firstSourceOptions.push(<option key={i} value={this.registerList[i]}>{this.registerList[i]}</option>);
	    secondSourceOptions.push(<option key={i} value={this.registerList[i]}>{this.registerList[i]}</option>);
	}
	
	for(i in this.state.codeSequence) {
	    codeSequenceComponent.push(<SequenceItem item={this.state.codeSequence[i]} key={i} />);
	}
	
	return (
		<div>
		Support forwarding: <input type="checkbox" onClick={this.toggleForwardingSupport}/>
		<div id="instructionList">
		<h3 id="instructionHeader">Instruction List</h3>
		    {instructionListComponent}
		</div>
		<div id="codeSequence">
		    {this.state.codeSequence.length > 0 &&
			<h3 id="codeSequenceHeader">Code Sequence</h3>}
                    {codeSequenceComponent}
                </div>
		<div className="addInstruction">
		<select id="opcodeSelect" onChange={this.change}>
		    {opcodeOptions}
		</select>
		<select id="firstRegisterSelect">
                    {destinationOptions}
                </select>
		<select id="secondRegisterSelect">
		    {this.state.memory ? <option>Offset</option> : firstSourceOptions}
                </select>
		<select id="thirdRegisterSelect">
                    {secondSourceOptions}
                </select>
		<button id="addInstruction" onClick={this.addNewInstruction}>Add Instruction</button>
		<button id="removeInstruction" onClick={this.removeInstruction}>Remove Instruction</button>
		<button id="getExecutionSequence" onClick={this.getExecutionSequence}>Get execution Sequence</button>
		</div>
		</div>
		);
    }
}

export default Instruction;