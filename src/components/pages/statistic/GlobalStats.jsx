import React, { Component } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class MyBarChartGlobal extends Component {
//handleYearFilter=(yearFrom,yearTo)=>{
  //this.props.onYearFilter(yearFrom, yearTo);

//};
    render() { 
let global = this.props.globalEmission; 
if(global === undefined) return <p>There is no data </p>;




    const dataChartGlobal = [
        {name: 'Year', value: global["Mean"], uv: global["Mean"]},
        {name: 'Year', value: global["Mean"], uv: global["Mean"]},
        {name: 'Year', value: global["Mean"], uv: global["Mean"]},
        {name: 'Year', value: global["Mean"], uv: global["Mean"]}
    ];

//const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

        return (  
          <React.Fragment>

            
<LineChart width={600} height={300} data={dataChartGlobal}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
       <Line type="monotone" dataKey="value3" stroke="#82ca6d" />
       
       
      </LineChart>
      
      </React.Fragment>
  
        );
    }
}

export default MyBarChartGlobal;