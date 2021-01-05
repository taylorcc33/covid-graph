import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "1/1/2020",
    deaths: 0,
    total_cases: 0,
    amt: 2400,
  },
  {
    name: "1/2/2020",
    deaths: 0,
    total_cases: 30,
    amt: 2210,
  },
  {
    name: "1/3/2020",
    deaths: 5,
    total_cases: 157,
    amt: 2290,
  },
  {
    name: "1/4/2020",
    deaths: 10,
    total_cases: 780,
    amt: 2000,
  },
  {
    name: "1/5/2020",
    deaths: 30,
    total_cases: 2345,
  },
  {
    name: "1/6/2020",
    deaths: 69,
    total_cases: 6443,
    amt: 2500,
  },
  {
    name: "1/7/2020",
    deaths: 345,
    total_cases: 15678,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";

  render() {
    return (
      <LineChart
        width={1200}
        height={450}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="total_cases"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="deaths" stroke="#82ca9d" />
      </LineChart>
    );
  }
}
