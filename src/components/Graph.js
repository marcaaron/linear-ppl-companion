import React, { Component } from 'react';
import Chart from 'chart.js';

class Graph extends Component {
  	render() {
		let dates = this.props.workouts;
			dates = dates.map((item)=>(item.date).substring(0,item.date.lastIndexOf('/')));
		let weights = this.props.workouts;
			weights = weights.map((item)=>item.workout[0].weight);
		let colorBox = document.querySelector('.table-exercise');
		let color = getComputedStyle(colorBox).backgroundColor;
			console.log(color);
			if(document.getElementById("myChart")){
				var ctx = document.getElementById("myChart").getContext('2d');
				var myChart = new Chart(ctx, {
				    type: 'line',
				    data: {
				        labels: dates,
				        datasets: [{
				            label: 'Weight in Lbs',
				            data: weights,
				            backgroundColor: [
				                color
				            ],
				            borderColor: [
				                'rgba(255,99,132,1)'
				            ],
				            borderWidth: 1
				        }]
				    },
				    options: {
						maintainAspectRatio: false,
				        scales: {
				            yAxes: [{
				                ticks: {
				                    beginAtZero:false
				                }
				            }]
				        }
				    }
				});
			}

		return (
			<div className ='chart-container'>
				<canvas id="myChart"></canvas>
			</div>
		);
  	}
}

export default Graph;
