"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const financeIndicatorsData = [
  {
    indicador: "Liquidez Corrente",
    "2022": 1.48,
    "2023": 1.16,
    "2024": 1.17,
  },
  {
    indicador: "Liquidez Seca",
    "2022": 0.95,
    "2023": 0.73,
    "2024": 0.71,
  },
  {
    indicador: "Endividamento",
    "2022": 2.54,
    "2023": 2.90,
    "2024": 2.30,
  },
  {
    indicador: "Giro do Ativo",
    "2022": 0.99,
    "2023": 0.98,
    "2024": 1.02,
  },
  {
    indicador: "Margem Líquida",
    "2022": -1.3,
    "2023": -2.7,
    "2024": 1.2,
  },
  {
    indicador: "Retorno Sobre Ativo",
    "2022": -1.3,
    "2023": -2.6,
    "2024": 1.2,
  },
];

interface FinanceIndicatorsChartProps {
  title?: string;
}

const FinanceIndicatorsChart: React.FC<FinanceIndicatorsChartProps> = ({
  title = "Evolução dos Indicadores Financeiros (2022–2024)",
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-2 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4 pl-3 pt-3 pb-2 border-b border-gray-200 text-gray-700">
        {title}
      </h2>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={financeIndicatorsData}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 60, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
          <XAxis type="number" stroke="#6b7280" fontSize={12} />
          <YAxis
            dataKey="indicador"
            type="category"
            stroke="#6b7280"
            fontSize={12}
            width={140}
          />
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
          <Bar dataKey="2022" fill="#3b82f6" barSize={18} name="2022" />
          <Bar dataKey="2023" fill="#f97316" barSize={18} name="2023" />
          <Bar dataKey="2024" fill="#16a34a" barSize={18} name="2024" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceIndicatorsChart;
