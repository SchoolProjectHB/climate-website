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

class MyBarChartGlacier extends Component {
  render() {
    let dataGlacier = this.props.GlacierEmission;
    if (dataGlacier === undefined) return <p>There is no data </p>;

    return (
      <React.Fragment>
        <LineChart
          width={1000}
          height={600}
          data={dataGlacier}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="Year" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Mean cumulative mass balance"
            name="Glaciärens Massbalans"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </React.Fragment>
    );
  }
}

export default MyBarChartGlacier;
