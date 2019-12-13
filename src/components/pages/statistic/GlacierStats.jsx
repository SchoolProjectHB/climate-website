import React, { Component } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class MyBarChartGlacier extends Component {
//handleYearFilter=(yearFrom,yearTo)=>{
  //this.props.onYearFilter(yearFrom, yearTo);

//};
    render() { 
let dataChartGlacier = this.props.CO2Emission; 
if(dataChartGlacier === undefined) return <p>There is no data </p>;


//const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

        return (  
          <React.Fragment>

            
<LineChart width={1000} height={600} data={dataChartGlacier}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="Year"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="Mean cumulative mass balance" name="Glaciärer" stroke="#8884d8" activeDot={{r: 8}}/>
       
       
      </LineChart>
      
      </React.Fragment>
  
        );
    }
}

export default MyBarChartGlacier;