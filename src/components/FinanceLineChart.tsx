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

const GRAUS_E_RETORNOS = {
  2022: {
    Endividamento: 0.7182 * 100,
    margembruta: 27.99,
    ROA: -1.32,
    ROE: -4.69,
    precosobreolucro: -40.58,
  },
  2023: {
    Endividamento: 0.7434 * 100,
    margembruta: 29.94,
    ROA: -2.61,
    ROE: -10.19,
    precosobreolucro: -16.30,
  },
  2024: {
    Endividamento: 0.6966 * 100,
    margembruta: 30.57,
    ROA: 1.2,
    ROE: 3.96,
    precosobreolucro: 10.7,
  },
};

const financeTrendsData = Object.entries(GRAUS_E_RETORNOS).map(
  ([ano, dados]) => ({
    ano,
    endividamento: Number(dados.Endividamento.toFixed(2)),
    margembruta: Number(dados.margembruta.toFixed(2)),
    roa: Number(dados.ROA.toFixed(2)),
    roe: Number(dados.ROE.toFixed(2)),
    precosobreolucro: Number(dados.precosobreolucro.toFixed(2)),
  })
);

interface FinanceLineChartProps {
  title?: string;
}

const FinanceLineChart: React.FC<FinanceLineChartProps> = ({
  title = "Evolução dos Indicadores Financeiros (2022–2024)",
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-2 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4 pl-3 pt-3 pb-2 border-b border-gray-200 text-gray-700">
        {title}
      </h2>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          data={financeTrendsData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
          <XAxis
            dataKey="ano"
            stroke="#6b7280"
            fontSize={12}
            tickLine={false}
          />
          <YAxis
            stroke="#6b7280"
            fontSize={12}
            tickLine={false}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip
            formatter={(value: number, name: string) => [`${value.toFixed(2)}%`, name]}
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
            dataKey="endividamento"
            name="Endividamento (%)"
            stroke="#dc2626"
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 2, fill: "#dc2626" }}
          />
          <Line
            type="monotone"
            dataKey="margembruta"
            name="Margem Bruta (%)"
            stroke="#22c55e"
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 2, fill: "#22c55e" }}
          />
          <Line
            type="monotone"
            dataKey="roa"
            name="ROA (%)"
            stroke="#8b5cf6"
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 2, fill: "#8b5cf6" }}
          />
          <Line
            type="monotone"
            dataKey="roe"
            name="ROE (%)"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 2, fill: "#3b82f6" }}
          />
          <Line
            type="monotone"
            dataKey="precosobreolucro"
            name="Preço Sobre Lucro (%)"
            stroke="#f59e0b"
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 2, fill: "#f59e0b" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceLineChart;
