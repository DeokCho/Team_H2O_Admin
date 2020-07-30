import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';

const data = {
	labels: [ 
		'Red', 'Blue', 'green'
	],
	datasets: [{
		label: '데이터',
		data: [20, 30, 50],
		backgroundColor: [
        'red',
        'blue',
        'green'
        ],
		hoverBackgroundColor: [
        'red',
        'blue',
        'green'
		]
	}]
};

var createReactClass = require('create-react-class');
export const DoughnutChart = createReactClass({
	render() {
		return (
		  <div>
			<h2>Dounut Chart</h2>
			<Doughnut data={data} />
		  </div>
		);
	  }
    });

const ChartBody = () => {
    return <div>
        <DoughnutChart/>
    </div>
}

export default ChartBody