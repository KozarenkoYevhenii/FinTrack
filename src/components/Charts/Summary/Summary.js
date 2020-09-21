import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Mon",
    Incomes: 4000,
    Charges: 2400,
    amt: 2400,
  },
  {
    name: "Tue",
    Incomes: 3000,
    Charges: 1398,
    amt: 2210,
  },
  {
    name: "Wed",
    Incomes: 2000,
    Charges: 9800,
    amt: 2290,
  },
  {
    name: "Thu",
    Incomes: 2780,
    Charges: 3908,
    amt: 2000,
  },
  {
    name: "Fri",
    Incomes: 1890,
    Charges: 4800,
    amt: 2181,
  },
  {
    name: "Sat",
    Incomes: 2390,
    Charges: 3800,
    amt: 2500,
  },
  {
    name: "Sun",
    Incomes: 3490,
    Charges: 4300,
    amt: 2100,
  },
];

function Summary() {
  return (
    <>
      <div>Summary</div>
      <button className="add-btn">Add More</button>
      <LineChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Charges" stroke="#8884d8" />
        <Line type="monotone" dataKey="Incomes" stroke="#82ca9d" />
      </LineChart>
    </>
  );
}

export default Summary;
