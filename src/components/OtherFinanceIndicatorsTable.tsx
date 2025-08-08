"use client";

import React, { useState } from "react";

interface OtherFinanceIndicatorsTableProps {
  title?: string;
  data: { name: string; valor: number | string }[];
}

const OtherFinanceIndicatorsTable: React.FC<
  OtherFinanceIndicatorsTableProps
> = ({ title = "Outros Indicadores Financeiros", data }) => {
  const [filtroCategoria, setFiltroCategoria] = useState("Todos");

  const categoriasMapeadas: Record<string, string> = {
    "liquidez geral": "Liquidez",
    "liquidez corrente": "Liquidez",
    "liquidez seca": "Liquidez",
    "liquidez imediata": "Liquidez",
    "endividamento geral": "Endividamento",
    "participação de capitais de terceiros": "Endividamento",
    "composição do endividamento": "Endividamento",
    "multiplicador da alavancagem financeira": "Endividamento",
    "retorno s/ patrimônio líquido (rspl)": "Rentabilidade",
    rentabilidadepl: "Rentabilidade",
    "roi dupont": "Rentabilidade",
    "grau de imobilização do ativo": "Rentabilidade",
    "grau de imobilização do patrimônio líquido": "Rentabilidade",
    "prazo médio renovação estoques (pmre)": "Atividade",
    pmre: "Atividade",
    "prazo médio recebimento vendas (pmrv)": "Atividade",
    pmrv: "Atividade",
    "prazo médio pagamento contas (pmpc)": "Atividade",
    pmpc: "Atividade",
    "ciclo operacional": "Atividade",
    "ciclo financeiro": "Atividade",
  };

  const categoriasDisponiveis = [
    "Todos",
    "Liquidez",
    "Endividamento",
    "Rentabilidade",
    "Atividade",
  ];

  const anoItem = data.find((item) => item.name.trim().toLowerCase() === "ano");
  const ano = anoItem ? anoItem.valor : "";

  const dataSemAno = data.filter(
    (item) => item.name.trim().toLowerCase() !== "ano"
  );

  const dataFiltrada = dataSemAno.filter((item) => {
    const nome = item.name.trim().toLowerCase();
    const categoria = categoriasMapeadas[nome];
    if (filtroCategoria === "Todos") return true;
    return categoria === filtroCategoria;
  });

  const getColorClass = (itemName: string, valor: number | string) => {
    const lowerName = itemName.trim().toLowerCase();
    const numericValue =
      typeof valor === "string"
        ? parseFloat(
            valor
              .toString()
              .replace("%", "")
              .replace(" dias", "")
              .replace(",", ".")
          )
        : valor;

    if (lowerName === "liquidez geral") {
      return numericValue >= 1 ? "text-green-600" : "text-red-600";
    }

    if (lowerName === "liquidez corrente") {
      return numericValue >= 1 ? "text-green-600" : "text-red-600";
    }

    if (lowerName === "liquidez seca") {
      return numericValue >= 1 ? "text-green-600" : "text-red-600";
    }

    if (lowerName === "liquidez imediata") {
      return numericValue >= 0.3 ? "text-green-600" : "text-red-600";
    }

    if (lowerName === "endividamento geral") {
      return numericValue <= 60 ? "text-green-600" : "text-red-600";
    }

    if (lowerName === "participação de capitais de terceiros") {
      return numericValue <= 150 ? "text-green-600" : "text-red-600";
    }

    if (lowerName === "composição do endividamento") {
      return numericValue <= 50 ? "text-red-600" : "text-green-600";
    }

    if (lowerName === "multiplicador da alavancagem financeira") {
      return numericValue <= 3 ? "text-green-600" : "text-red-600";
    }

    if (lowerName === "roi dupont") {
      return numericValue > 0 ? "text-green-600" : "text-red-600";
    }

    if (lowerName.includes("grau de imobilização")) {
      return numericValue <= 100 ? "text-green-600" : "text-red-600";
    }

    if (
      lowerName === "retorno s/ patrimônio líquido (rspl)" ||
      lowerName === "rentabilidadepl"
    ) {
      return numericValue > 0 ? "text-green-600" : "text-red-600";
    }

    if (
      lowerName === "prazo médio renovação estoques (pmre)" ||
      lowerName === "pmre"
    ) {
      return numericValue <= 60 ? "text-green-600" : "text-red-600";
    }

    if (
      lowerName === "prazo médio recebimento vendas (pmrv)" ||
      lowerName === "pmrv"
    ) {
      return numericValue <= 40 ? "text-green-600" : "text-red-600";
    }

    if (
      lowerName === "prazo médio pagamento contas (pmpc)" ||
      lowerName === "pmpc"
    ) {
      return numericValue >= 60 ? "text-green-600" : "text-red-600";
    }

    if (lowerName === "ciclo operacional" || lowerName === "ciclooperacional") {
      return numericValue <= 100 ? "text-green-600" : "text-red-600";
    }

    if (lowerName === "ciclo financeiro" || lowerName === "ciclofinanceiro") {
      return numericValue <= 50 ? "text-green-600" : "text-red-600";
    }

    return "text-gray-800";
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-5">
      <h2 className="text-lg font-semibold mb-4 pl-2 pt-3 pb-2 border-b border-gray-200 text-gray-700">
        {title} {ano && `do ano ${ano}`}
      </h2>

      <div className="mb-4">
        <label
          htmlFor="categoria"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Filtrar por categoria:
        </label>
        <select
          id="categoria"
          className="border border-gray-300 rounded-md px-3 py-1 text-sm"
          value={filtroCategoria}
          onChange={(e) => setFiltroCategoria(e.target.value)}
        >
          {categoriasDisponiveis.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        {dataFiltrada.map((item, idx) => {
          const valorExibido = item.valor;
          const colorClass = getColorClass(item.name, item.valor);

          return (
            <div
              key={idx}
              className="flex justify-between items-center border-gray-300 border-b px-4 py-2"
            >
              <span className="text-gray-800 text-sm">{item.name}</span>
              <span className={`font-semibold text-sm ${colorClass}`}>
                {valorExibido}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OtherFinanceIndicatorsTable;
