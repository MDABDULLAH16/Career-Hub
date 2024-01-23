import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Statistics.css";

const Statistics = () => {
  const data = useLoaderData();
  return (
    <div className="rechart-container">
      <div className="rechart">
        <LineChart height={400} width={700} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dataKey={"mark"} stroke="#8884d8"></Line>
        </LineChart>
      </div>
    </div>
  );
};

export default Statistics;
