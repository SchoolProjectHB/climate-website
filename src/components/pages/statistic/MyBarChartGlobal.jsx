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

class MyBarChartGlobal extends Component {
  render() {
    let globalTemp = this.props.globalTempEmission;
    if (globalTemp === undefined) return <p>There is no data </p>;

    return (
      <React.Fragment>
        <LineChart
          width={1000}
          height={600}
          data={globalTemp}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="Year" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Mean"
            name="Gensomsnittlig temperatur (C°)"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </React.Fragment>
    );
  }
}

export default MyBarChartGlobal;
