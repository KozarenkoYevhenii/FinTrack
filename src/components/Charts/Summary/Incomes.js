import React from "react";
import {
  CartesianGrid,
  Legend,
  Bar,
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Salary",
    Incomes: 4000,
  },
  {
    name: "Part-time freelance",
    Incomes: 3000,
  },
  {
    name: "Selling unnecessary staff",
    Incomes: 2000,
  },
];

function IncomesChart() {
  return (
    <>
      <div>Incomes categories</div>
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Incomes" fill="#8884d8" />
      </BarChart>
      </>
  );
}

export default IncomesChart;
