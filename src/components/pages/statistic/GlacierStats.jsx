import React, { Component } from 'react';
//import YearFilter from "./FilterYear";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class MyBarChartGlacier extends Component {
//handleYearFilter=(yearFrom,yearTo)=>{
  //this.props.onYearFilter(yearFrom, yearTo);

//};
    render() { 
let co2 = this.props.CO2Emission; 
if(co2 === undefined) return <p>There is no data </p>;



  const dataChartGlacier = [
    {name: '1945', value1: co2["Mean-cumulative-mass-balance"]},
    {name: '1947', value1: co2["Mean cumulative mass balance"]},
    {name: '1949', value1: co2["Mean cumulative mass balance"]},
    {name: '1951', value1: co2["Mean cumulative mass balance"]},
    {name: '1953', value1: co2["Mean cumulative mass balance"]},
    {name: '1955', value1: co2["Mean cumulative mass balance"]},
    {name: '1957', value1: co2["Mean cumulative mass balance"]},
    {name: '1959', value1: co2["Mean cumulative mass balance"]},
    {name: '1961', value1: co2["Mean cumulative mass balance"]}
];

//const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

        return (  
          <React.Fragment>

            
<LineChart width={600} height={300} data={dataChartGlacier}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="value1" stroke="#8884d8" activeDot={{r: 8}}/>
       
       
      </LineChart>
      
      </React.Fragment>
  
        );
    }
}

export default MyBarChartGlacier;