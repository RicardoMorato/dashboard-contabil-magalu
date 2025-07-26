"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const financeTrendsData = [
  { ano: "2022", gaf: 1.3, gao: 1.5, gat: 2.0, roa: -1.3, roe: -4.7 },
  { ano: "2023", gaf: 1.4, gao: 1.6, gat: 2.2, roa: -2.6, roe: -10.2 },
  { ano: "2024", gaf: 1.2, gao: 1.4, gat: 1.7, roa: 1.2, roe: 4.0 },
];

interface FinanceLineChartProps {
  title?: string;
}

const FinanceLineChart: React.FC<FinanceLineChartProps> = ({
  title = "Evolução das Alavancagens e Rentabilidades (2022–2024)",
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-2 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4 pl-3 pt-3 pb-2 border-b border-gray-200 text-gray-700">
        {title}
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={financeTrendsData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
          <XAxis dataKey="ano" stroke="#6b7280" fontSize={12} tickLine={false} />
          <YAxis stroke="#6b7280" fontSize={12} tickLine={false} />
          <Tooltip
            contentStyle={{
              borderRadius: 8,
              borderColor: "#e5e7eb",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              fontSize: 13,
            }}
          />
          <Legend
            verticalAlign="top"
            layout="horizontal"
            align="center"
            iconType="circle"
            wrapperStyle={{ paddingBottom: 10 }}
          />
          <Line
            type="monotone"
            dataKey="gaf"
            name="GAF"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 2, fill: "#3b82f6" }}
          />
          <Line
            type="monotone"
            dataKey="gao"
            name="GAO"
            stroke="#16a34a"
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 2, fill: "#16a34a" }}
          />
          <Line
            type="monotone"
            dataKey="gat"
            name="GAT"
            stroke="#f59e0b"
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 2, fill: "#f59e0b" }}
          />
          <Line
            type="monotone"
            dataKey="roa"
            name="ROA"
            stroke="#8b5cf6"
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 2, fill: "#8b5cf6" }}
          />
          <Line
            type="monotone"
            dataKey="roe"
            name="ROE"
            stroke="#dc2626"
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 2, fill: "#dc2626" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceLineChart;
