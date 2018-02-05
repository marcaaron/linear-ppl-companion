import React, { Component } from 'react';
import parseData from './parseData';
import Table from './Table';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state={
			workouts:{}
		}
	}

	componentWillMount(){
		const xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = ()=>{
			if (xhttp.readyState === 4 && xhttp.status === 200) {
				let workouts = (JSON.parse(xhttp.response)).workouts;
				// workouts = parseData(workouts);
				this.setState({workouts});
			}else{
				console.log('this is not working');
			};
		};
		xhttp.open("GET","https://warm-gorge-45848.herokuapp.com/workouts");
		xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xhttp.send();
	}

  	render() {
    	return (
    		<div>
				<Table
					workouts={this.state.workouts}
				/>
      		</div>
    );
  }
}

export default App;
