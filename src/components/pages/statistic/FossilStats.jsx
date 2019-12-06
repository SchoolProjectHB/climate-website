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
if(co2 === undefined) return <p>There is no data...! </p>;




//const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

        return (  
          <React.Fragment>


            
<LineChart width={1100} height={600} data={co2}

            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="Year"/>
       <YAxis name="co2"/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="Gas Fuel" name="Gasbränslen" stroke="#3f6962" activeDot={{r: 4}}/>
       <Line type="monotone" dataKey="Liquid Fuel" name="Flytande bränslen" stroke="#849c4e" activeDot={{r: 4}}/>
       <Line type="monotone" dataKey="Solid Fuel" name="Fasta bränslen" stroke="#e1903c" activeDot={{r: 4}}/>
       <Line type="monotone" dataKey="Cement" name="Cement" stroke="#f7de34" activeDot={{r: 4}}/>
       
       
      </LineChart>
      
      </React.Fragment>
  
        );
    }
}

export default MyBarChart;