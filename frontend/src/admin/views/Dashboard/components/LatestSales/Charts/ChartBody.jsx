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
        ],
        borderWidth : 1
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
	
export const BarChart = createReactClass => ({
	render() {
    return (
      <div>
        <h2>Bar Example (custom size)</h2>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
});

const ChartBody = () => {
    return <div 
	style={{backgroundColor:"white"}}>
	<DoughnutChart/>
</div>
}

export default ChartBody