import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

class MyBarChartSeaLevel extends Component {
  render() {
    let seaLevelData = this.props.SeaLevelEmission;
    if (seaLevelData === undefined) return <p>There is no data </p>;

    return (
      <React.Fragment>
        <LineChart
          width={1000}
          height={500}
          data={seaLevelData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="Time" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            name="Global medelhavsnivå (m)"
            dataKey="GMSL"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </React.Fragment>
    );
  }
}

export default MyBarChartSeaLevel;
