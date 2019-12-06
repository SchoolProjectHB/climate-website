import React, { Component } from 'react';
//import YearFilter from "./FilterYear";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class MyBarChart extends Component {
//handleYearFilter=(yearFrom,yearTo)=>{
  //this.props.onYearFilter(yearFrom, yearTo);

//};
    render() { 
let co2 = this.props.CO2Emission; 
if(co2 === undefined) return <p>There is no data </p>;




//const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

        return (  
          <React.Fragment>

            
<LineChart width={600} height={300} data={co2}

            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="Year"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="Gas Fuel" name="Gasbränslen" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="Liquid Fuel" stroke="#82ca9d" />
       <Line type="monotone" dataKey="Solid Fuel" stroke="#82ca6d" />
       <Line type="monotone" dataKey="Cement" stroke="#82ca1d" />
       
       
      </LineChart>
      
      </React.Fragment>
  
        );
    }
}

export default MyBarChart;