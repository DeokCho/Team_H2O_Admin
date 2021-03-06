import React, {useState} from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';

import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  Menu,
  MenuItem 
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { data, options } from '../chart';
import { Link } from 'react-router-dom';


// export const chartData = props => {
//   const { chartData } = props
//   alert(chartData)
// }


// Dounut Chart Data
const dougnutData = {
	labels: [ 
    '청소년', '청년', '중년', '장년', '노년'
	],
	datasets: [{
		label: '데이터',
		data: [15, 35, 25, 15, 10],
		backgroundColor: [
        'red',
        'orange',
        'gray',
        'green',
        'blue'
        ],
		hoverBackgroundColor: [
        'red',
        'orange',
        'gray',
        'green',
        'blue'
        ],
        borderWidth : 1
	}]
};


var createReactClass = require('create-react-class');
export const DoughnutChart = createReactClass({
  displayName: 'DoughnutChart',
	render() {
		return (
		  <div>
        <h2>연령층별 이용자 비율</h2>
			<Doughnut data={dougnutData} />
		  </div>
		);
	  }
	});




// Bar Chart Data
const barData = {
  labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월','10월','11월','12월'],
  datasets: [
    {
      label: '월별 이용자 수',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40, 34, 21, 55, 78, 95]
    }
  ]
};

export const BarChart = createReactClass => ({
  displayName: 'BarChart',
	render() {
    return (
      <div>
        <h2>월별 이용자 수</h2>
        <Bar 
          data={barData}
        />
      </div>
    );
  }
});

// var createReactClass = require('create-react-class');
// export const DoughnutChart = createReactClass({
//   displayName: 'DoughnutChart',
// 	render() {
// 		return (
// 		  <div>
// 			<h2>Dounut Chart</h2>
// 			<Doughnut data={dougnutData} />
// 		  </div>
// 		);
// 	  }
// 	});

// Mixed Chart Data
const mixedData = {
  // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
  label: 'Sales',
  type:'line',
  data: [51, 65, 40, 49, 60, 37, 40],
  fill: false,
  borderColor: '#EC932F',
  backgroundColor: '#EC932F',
  pointBorderColor: '#EC932F',
  pointBackgroundColor: '#EC932F',
  pointHoverBackgroundColor: '#EC932F',
  pointHoverBorderColor: '#EC932F',
  yAxisID: 'y-axis-2'
  },{
  type: 'bar',
  label: 'Visitor',
  data: [200, 185, 590, 621, 250, 400, 95],
  fill: false,
  backgroundColor: '#71B37C',
  borderColor: '#71B37C',
  hoverBackgroundColor: '#71B37C',
  hoverBorderColor: '#71B37C',
  yAxisID: 'y-axis-1'
  }]
  };
  
  const chartOptions = {
  responsive: true,
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  tooltips: {
  mode: 'label'
  },
  elements: {
  line: {
  fill: false
  }
  },
  scales: {
  
  xAxes: [
    {
      display: true,
      gridLines: {
        display: false
      },
  
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    }
  ],
  yAxes: [
    {
      type: 'linear',
      display: true,
      position: 'left',
      id: 'y-axis-1',
      gridLines: {
        display: false
      },
      labels: {
        show: true
      }
    },
    {
      type: 'linear',
      display: true,
      position: 'right',
      id: 'y-axis-2',
      gridLines: {
        display: false
      },
      labels: {
        show: true
      }
    }
  ]
  }
  };

const plugins = [{
  afterDraw: (chartInstance, easing) => {
  const ctx = chartInstance.chart.ctx;
  ctx.fillText("This text drawn by a plugin", 100, 100);
  }
  }];


export const MixedChart = createReactClass => ({
  displayName: 'MixedChart',

  render() {
    return (
      <div>
        <h2>Mixed data Example</h2>
        <Bar
          data={mixedData}
          options={chartOptions}
          plugins={plugins}
        />
      </div>
    );
  }
});

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 400,
    position: 'relative'
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const ChartBody = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  //
  const [dropdownState, setDropdownState] = useState(null);
  const [days, setDays] = useState(7)

  const handleClick = (event) => {
    setDropdownState(event.currentTarget);
  };

  const handleClose = () => {
    setDropdownState(null);
  };
  
  //
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <div>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} size="small" variant="text" >
          
          최근 {days}일 전
        
          <ArrowDropDownIcon />
          </Button>
          <Menu
          id="simple-menu"
          dropdownState={dropdownState}
          keepMounted
          open={Boolean(dropdownState)}
          onClose={handleClose}
        >
          <MenuItem onClick={()=> {setDays(7); setDropdownState(null); }}>최근 일주일</MenuItem>
          <MenuItem onClick={()=> {setDays(15); setDropdownState(null); }}>최근 15일</MenuItem>
          <MenuItem onClick={()=> {setDays(30); setDropdownState(null); }}>최근 한달</MenuItem>
        </Menu>
        </div>}
        
        title="판매량 통계(ChartBody)"
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Bar
            data={data}
            options={options}
          />
        </div>
      </CardContent>
      <Divider />
    </Card>
  );
};

ChartBody.propTypes = {
  className: PropTypes.string
};

export default ChartBody;