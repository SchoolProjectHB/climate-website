import React, { Component } from 'react';
//import YearFilter from "./FilterYear";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class MyBarChartSeaLevel extends Component {
//handleYearFilter=(yearFrom,yearTo)=>{
  //this.props.onYearFilter(yearFrom, yearTo);

//};
    render() { 
let co2 = this.props.CO2Emission; 
if(co2 === undefined) return <p>There is no data </p>;

    const dataChartSeaLevel = [
        {name: 'Mean', value: co2["Mean"], uv: co2["Mean"]},
    ];

//const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

        return (  
          <React.Fragment>

            
<LineChart width={600} height={300} data={dataChartSeaLevel}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{r: 8}}/>
       
       
      </LineChart>
      
      </React.Fragment>
  
        );
    }
}

export default MyBarChartSeaLevel;