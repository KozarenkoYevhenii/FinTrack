import React from "react";
import { Cell, Legend, Pie, PieChart } from "recharts";

const data = [
  {
    name: "Food",
    Charges: 4000,
    color: "red",
  },
  {
    name: "Home",
    Charges: 3000,
    color: "green",
  },
  {
    name: "Car",
    Charges: 2000,
    color: "blue",
  },
  {
    name: "Pets",
    Charges: 2000,
    color: "yellow",
  },
  {
    name: "Health",
    Charges: 2000,
    color: "pink",
  },
  {
    name: "Clothes",
    Charges: 2000,
    color: "brown",
  },
  {
    name: "Utility bills",
    Charges: 2000,
    color: "gray",
  },
];

function ChargesChart() {
  return (
    <>
      <div>Charges categories</div>
    <PieChart width={730} height={250}>
      <Pie
        data={data}
        dataKey="Charges"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill={data.color}
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Legend />
      </PieChart>
      </>
  );
}

export default ChargesChart;
