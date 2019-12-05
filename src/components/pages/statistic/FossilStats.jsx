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



  const dataChart = [
    {name: '1960', gasfuel: co2["Gas Fuel"], liquidfuel: co2["Liquid Fuel"], solidfuel: co2["Solid Fuel"], cement: co2["Cement"]},
    {name: '1970', gasfuel: co2["Gas Fuel"], liquidfuel: co2["Liquid Fuel"], solidfuel: co2["Solid Fuel"], cement: co2["Cement"]},
    {name: '1980', gasfuel: co2["Gas Fuel"], liquidfuel: co2["Liquid Fuel"], solidfuel: co2["Solid Fuel"], cement: co2["Cement"]},
    {name: '2000', gasfuel: co2["Gas Fuel"], liquidfuel: co2["Liquid Fuel"], solidfuel: co2["Solid Fuel"], cement: co2["Cement"]},
    {name: '2010', gasfuel: co2["Gas Fuel"], liquidfuel: co2["Liquid Fuel"], solidfuel: co2["Solid Fuel"], cement: co2["Cement"]},
    {name: '2002', gasfuel: co2["Gas Fuel"], liquidfuel: co2["Liquid Fuel"], solidfuel: co2["Solid Fuel"], cement: co2["Cement"]},
    {name: '2003', gasfuel: co2["Gas Fuel"], liquidfuel: co2["Liquid Fuel"], solidfuel: co2["Solid Fuel"], cement: co2["Cement"]}
];

//const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

        return (  
          <React.Fragment>

            
<LineChart width={600} height={300} data={dataChart}

            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="gasfuel" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="liquidfuel" stroke="#82ca9d" />
       <Line type="monotone" dataKey="solidfuel" stroke="#82ca6d" />
       <Line type="monotone" dataKey="cement" stroke="#82ca1d" />
       
       
      </LineChart>
      
      </React.Fragment>
  
        );
    }
}

export default MyBarChart;