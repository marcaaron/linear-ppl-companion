import React, { Component } from 'react';

class Graph extends Component {
  	render() {
		let dates = this.props.workouts;
			dates = dates.map((item)=>(item.date).substring(0,item.date.lastIndexOf('/')));
		let weights = this.props.workouts;
			weights = weights.map((item)=>item.workout[0].weight);

		let marks = [];
		for(let z=0;z<dates.length;z++){
			const string = [dates[z],weights[z]].toString();
			marks.push(string);
		}
		weights = weights.reverse();
		const dateStyle = {gridRow:dates.length+1};
		const buttStyle = {gridRow:dates.length+1};
		let templateString = '';
		for(let i=0; i<dates.length;i++){templateString+='auto '};
		const templateStyle = {gridTemplateColumns: templateString};
		const gridSpaceStyle = {gridTemplateColumns: templateString, gridColumn: `2/${dates.length+2}`, gridRow: `1/${dates.length+1}`};
		let space = [];
		for(let i=0; i<dates.length;i++){
			for(let j=0; j<dates.length; j++){
				space.push([dates[j], weights[i]]);
			}
		}
		return (
			<div style={templateStyle} className="graph-container">
				<div style={buttStyle} className="grid-item"></div>
				{
					dates.map((date)=>{
						return[
							<div style={dateStyle} className="grid-item date-tick">{date}</div>
						]
					})
				}

				<div style={gridSpaceStyle} className="grid-space">
					{
						space.map((grid,index)=>{
							return[
								<div className="grid-space-items">
								{marks.includes(grid.toString())?'•': ' '}
								</div>
							]
						})
					}
				</div>

				{
					weights.map((weight)=>{
						return[
							<div className="grid-item weight-tick">{weight}</div>
						]
					})
				}
			</div>
		);
  	}
}

export default Graph;
