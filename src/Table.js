import React, { Component } from 'react';
import './App.css';
import Entry from './components/Entry';
import Graph from './components/Graph';

class Table extends Component {
	constructor(props){
		super(props);
		this.state={
			dayType:-1,
			exercise:''
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleBack = this.handleBack.bind(this);
	}

	handleBack(e){
		e.preventDefault();
		if(this.state.exercise===''){
			const dayType = -1;
			this.setState({dayType});
		}else if(this.state.exercise!==''){
			const exercise = '';
			this.setState({exercise});
		}
	}

	handleClick(e){
		e.preventDefault();
		let dayType = parseInt(e.target.dataset.day);
		let exercise = this.state.exercise;
		if(this.state.dayType>-1){
			exercise = e.target.dataset.exercise
		}

		this.setState({dayType, exercise});
	}
	// componentDidUpdate(){
	// 	if(this.state.dayType===null){
	// 		const workouts = [...this.props.workouts];
	// 		console.log(workouts);
	// 	}
	// }

  	render() {
		let workouts;
		if(this.props.workouts){
			workouts = [...this.props.workouts];
		}
		if(this.props.workouts && this.state.dayType!==-1){
			workouts = workouts.filter((entry)=>entry.prevWorkout===this.state.dayType);
		}
		if(this.props.workouts && this.state.exercise!==''){
			workouts = [...this.props.workouts];
			workouts = workouts.map((object)=>{
				const obj = {...object};
				const objArray = obj.workout.filter(keys=>keys.name===this.state.exercise);
				obj.workout = objArray;
				return obj;
			});
			workouts = workouts.filter((item)=>{
				if(item.workout[0]){
				 return	item.workout[0].name===this.state.exercise
				}
			});
		}
    	return (
			<div className="page-container">
				<button onClick={this.handleBack}>Back</button>
	    		<div className="table-container">
					<div className="table-heading">Date</div>
					<div className="table-heading">Exercise</div>
	 				<div className="table-heading">Lbs.</div>
					{workouts!==[] && workouts.map((entry, index)=>{
						return[
						<Entry
							handleClick={this.handleClick}
							entry={entry}
						/>
						]
					})}
	      		</div>
				{this.props.workouts && this.state.exercise!=='' &&
					<Graph
					workouts={workouts}/>
				}
			</div>
    	);
  	}
}

export default Table;
