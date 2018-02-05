import React, { Component } from 'react';
import {keyGen} from '../helpers';

class Entry extends Component {
  	render() {
		const entry = this.props.entry;
		let entries;
		if (entry){
			entries = entry.workout.map((exercise, index)=>{
				let classname = exercise.name.toLowerCase().replace(/\s/g, '-').replace(/\./g, '').replace(/\/.*$/g, '');
				let exerciseName = exercise.name;
				let dayType = entry.prevWorkout;

				switch(dayType){
				case 0:
					dayType = 'leg';
					break;
				case 1:
					dayType = 'push1';
					break;
				case 2:
					dayType = 'pull1';
					break;
				case 3:
					dayType = 'leg';
					break;
				case 4:
					dayType = 'push2';
					break;
				case 5:
					dayType = 'pull2';
					break;
				default:
					break;
				}

				switch(exerciseName){
				case 'BARBELL ROW':
					exerciseName='Barbell Row';
					break;
				case 'PULLUP':
					exerciseName='Pull Up';
					break;
				case 'CABLE ROW':
					exerciseName='Cable Row';
					break;
				case 'FACE PULL':
					exerciseName='Face Pull';
					break;
				case 'HAMMER CURL':
					exerciseName='Hammer Curl';
					break;
				case 'DB CURL':
					exerciseName='Dumbbell Curl';
					break;
				case 'SQUAT':
					exerciseName='Squat';
					break;
				case 'R. DEADLIFT':
					exerciseName='Romanian Deadlift';
					break;
				case 'LEG PRESS':
					exerciseName='Leg Press';
					break;
				case 'LEG CURL':
					exerciseName='Leg Curl';
					break;
				case 'CALF RAISE':
					exerciseName='Calf Raise';
					break;
				case 'BENCH PRESS':
					if(dayType==='push1'){
						exerciseName='Bench Press (LV)';
					}else{
						exerciseName='Bench Press (HV)';
					}
					break;
				case 'OVERHEAD PRESS':
					if(dayType==='push1'){
						exerciseName='Overhead Press (HV)';
					}else{
						exerciseName='Overhead Press (LV)';
					}
					break;
				case 'INCLINE PRESS':
					exerciseName='Incline Press';
					break;
				case 'TRI PD/LAT RAISE':
					exerciseName='Triceps Pulldown';
					break;
				case 'OH TRI/LAT RAISE':
					exerciseName='Overhead Triceps Extension';
					break;
				case 'DEADLIFT':
					exerciseName='Deadlift';
					break;
				case 'PULLDOWN':
					exerciseName='Lat Pulldown';
					break;
				default:
					break;
				}
		    	return [
					<div className={`table-date _${index}`}>
						{entry.date}</div>,
					<div
						onClick={this.props.handleClick}
						className={`table-exercise ${dayType} _${index}`} data-exercise={exercise.name}
						data-day={entry.prevWorkout}>
							{exerciseName}
					</div>,
					<div className={`table-weight _${index}`}>{exercise.weight}</div>
		    	];
			});
		}
		return entries;
  	}
}

export default Entry;
