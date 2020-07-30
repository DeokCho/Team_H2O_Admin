import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import { ChartBody, ChartHead} from './Charts'

const data = {
	labels: [ // 차트의 이름
		'January', 'February', 'March', 'April', 'May', 'June', 'July'
	],
	datasets: [{
		label: '데이터',
		data: [40, 30, 20, 10, 50, 25, 100, 30], // 해당 데이터로 차트의 크기를 변화
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56',
		'#000000',
		'red',
		'blue',
		'purple',
		'gray'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56',
		'#000000'
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

const BarChart = createReactClass({
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


const OverViewSales = () => {
		return (
		  <div>
			  <ChartHead/>
			  <ChartBody/>
		  </div>
		);
}
export default OverViewSales