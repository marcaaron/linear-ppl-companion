function parseData(workouts){
	const squat = workouts.map((day)=>{
		if(day.prevWorkout===0||day.prevWorkout===3){
			return [day.date, day.workout[0].name, day.workout[0].weight];
		}
	}).filter((day)=>typeof day !== 'undefined');

	const rDeadlift = workouts.map((day)=>{
		if(day.prevWorkout===0||day.prevWorkout===3){
			return [day.date, day.workout[1].name, day.workout[1].weight];
		}
	}).filter((day)=>typeof day !== 'undefined');
	const legPress = workouts.map((day)=>{
		if(day.prevWorkout===0||day.prevWorkout===3){
			return [day.date, day.workout[2].name, day.workout[2].weight];
		}
	}).filter((day)=>typeof day !== 'undefined');
	const legCurl = workouts.map((day)=>{
		if(day.prevWorkout===0||day.prevWorkout===3){
			return [day.date, day.workout[3].name, day.workout[3].weight];
		}
	}).filter((day)=>typeof day !== 'undefined');
	const calfRaise = workouts.map((day)=>{
		if(day.prevWorkout===0||day.prevWorkout===3){
			return [day.date, day.workout[4].name, day.workout[4].weight];
		}
	}).filter((day)=>typeof day !== 'undefined');
	return {calfRaise, legCurl, legPress, rDeadlift, squat}
}

export default parseData;
