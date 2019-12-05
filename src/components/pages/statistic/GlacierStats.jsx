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
    {name: '1950', value1: co2["Gas Fuel"],value2: co2["Solid Fuel"],value3: co2["Liquid Fuel"]},
    {name: '1960', value1: co2["Gas Fuel"],value2: co2["Solid Fuel"],value3: co2["Liquid Fuel"]},
    {name: '1970', value1: co2["Gas Fuel"],value2: co2["Solid Fuel"],value3: co2["Liquid Fuel"]},
    {name: '1980', value1: co2["Gas Fuel"],value2: co2["Solid Fuel"],value3: co2["Liquid Fuel"]},
    {name: '1990', value1: co2["Gas Fuel"],value2: co2["Solid Fuel"],value3: co2["Liquid Fuel"]},
    {name: '2000', value1: co2["Gas Fuel"],value2: co2["Solid Fuel"],value3: co2["Liquid Fuel"]},
    {name: '2010', value1: co2["Gas Fuel"],value2: co2["Solid Fuel"],value3: co2["Liquid Fuel"]},
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
       <Line type="monotone" dataKey="value2" stroke="#82ca9d" />
       <Line type="monotone" dataKey="value3" stroke="#82ca6d" />
       
       
      </LineChart>
      
      </React.Fragment>
  
        );
    }
}

export default MyBarChartGlacier;