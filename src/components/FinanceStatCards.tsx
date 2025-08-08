"use client";

import { useState } from "react";
import StatCard from "@/components/StatCard";
import { DollarSign, ShoppingBag, Database, Layers } from "lucide-react";
import FinanceIndicatorsChart from "@/components/FinanceIndicatorsChart";
import OtherFinanceIndicatorsTable from "./OtherFinanceIndicatorsTable";
import FinanceLineChart from "./FinanceLineChart";

type FinanceData = {
  ano: string;
  lucroLiquido: string;
  receitaLiquida: string;
  ativoTotal: string;
  patrimonioLiquido: string;

  LiquidezCorrente: number;
  LiquidezSeca: number;
  EndividamentoGeral: string;
  GiroAtivo: number;
  MargemLiquida: string;
  RentabilidadeAtivo: string;

  LiquidezGeral: number;
  ParticipacaoCapitaisTerceiros: string;
  GrauImobilizacaoPL: string;
  GrauImobilizacaoRNC: string;
  RentabilidadePL: string;
  PMRE: string;
  PMRV: string;
  PMPC: string;
  CicloFinanceiro: string;
  ComposicaoEndividamento: string;
  LiquidezImediata: number;
  MultiplicadorAlavancagemFinanceira: number;
  ROIDuPont: string;
  AlavancagemFinanceira: number;
};

interface FinanceStatCardsProps {
  data: FinanceData;
}

const FinanceStatCards: React.FC<FinanceStatCardsProps> = ({ data }) => {
  const [selectedIndicator, setSelectedIndicator] = useState("");

  const formulas: Record<string, string> = {
    "Endividamento Geral (EG)": "(PC + PNC) / AT × 100",
    "Participação de Capitais de Terceiros (PCT)": "(PC + PNC) / PL × 100",
    "Composição do Endividamento (CE)": "PC / (PC + PNC) × 100",
    "Grau de Imobilização do PL (ImPL)": "(ANC − RLP) / PL × 100",
    "Grau de Imobilização dos Recursos Não Correntes (IRNC)":
      "(ANC − RLP) / (PNC + PL) × 100",

    "Liquidez Geral (LG)": "(AC + RLP) / (PC + PNC)",
    "Liquidez Corrente (LC)": "AC / PC",
    "Liquidez Seca (LS)": "(AC − Estoques) / PC",
    "Liquidez Imediata (LIm)": "Disponível / PC",

    "Giro do Ativo (GA)": "Vendas Líquidas / AT médio",
    "Margem Líquida (ML)": "Lucro Líquido / Vendas Líquidas × 100",
    "Rentabilidade do Ativo (ROA ou ROI)": "Lucro Líquido / AT médio × 100",
    "Rentabilidade do Patrimônio Líquido (ROE)":
      "Lucro Líquido / PL médio × 100",
    "Multiplicador de Alavancagem Financeira (MAF)": "AT médio / PL médio",
    "Análise do ROI (DuPont)": "GA × ML",

    "Alavancagem Financeira (GAF)": "ROE / ROA",
    "Alavancagem Operacional (GAO)": "ΔLOp / ΔVAt",
    "Alavancagem Total (GAT)": "GAF × GAO",

    "Prazo Médio de Renovação de Estoques (PMRE)":
      "(Estoques médios / CMV) × 360",
    "Prazo Médio de Recebimento das Vendas (PMRV)":
      "(Clientes médios / RLV) × 360",
    "Prazo Médio de Pagamento das Compras (PMPC)":
      "(Fornec. médios / RLV) × 360",
    "Ciclo Financeiro": "PMRE + PMRV − PMPC",
  };

  const lucroLiquidoNumber = Number(
    data.lucroLiquido.replace(/\./g, "").replace(",", ".").trim()
  );

  return (
    <div className="flex-1 bg-gray-100 relative z-10">
      <main className="max-w-7xl mx-auto p-8">
        <div className="flex items-center justify-between mb-2 bg-white p-4 rounded mb-8">
          <h1 className="text-base font-bold text-blue-700 flex items-center gap-2">
            Dashboard {data.ano}
          </h1>

          {/* Dropdown com indicadores */}
          <div className="flex items-center gap-2">
            <select
              className="border rounded px-2 py-1"
              value={selectedIndicator}
              onChange={(e) => setSelectedIndicator(e.target.value)}
            >
              <option value="">
                Selecione um indicador para visualizar sua fórmula
              </option>
              {Object.keys(formulas).map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Card da fórmula */}
        {selectedIndicator && (
          <div className="bg-white p-4 rounded shadow-md border mb-4">
            <h2 className="font-semibold">{selectedIndicator}</h2>
            <p className="text-sm text-gray-600">
              Fórmula: {formulas[selectedIndicator]}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatCard
            name={lucroLiquidoNumber < 0 ? "Prejuízo Líquido" : "Lucro Líquido"}
            icon={DollarSign}
            value={`R$ ${data.lucroLiquido}`}
            valueClassName={
              lucroLiquidoNumber < 0 ? "text-red-600" : "text-green-600"
            }
          />
          <StatCard
            name="Receita Líquida"
            icon={ShoppingBag}
            value={`R$ ${data.receitaLiquida}`}
          />
          <StatCard
            name="Ativo Total"
            icon={Database}
            value={`R$ ${data.ativoTotal}`}
          />
          <StatCard
            name="Patrimônio Líquido"
            icon={Layers}
            value={`R$ ${data.patrimonioLiquido}`}
          />
        </div>

        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FinanceIndicatorsChart />
            <FinanceLineChart />
          </div>
          <OtherFinanceIndicatorsTable
            data={[
              { name: "Liquidez Geral", valor: data.LiquidezGeral },
              { name: "Liquidez Imediata", valor: data.LiquidezImediata },
              {
                name: "Participação de Capitais de Terceiros",
                valor: data.ParticipacaoCapitaisTerceiros,
              },
              {
                name: "Grau de Imobilização do Patrimônio Líquido",
                valor: data.GrauImobilizacaoPL,
              },
              {
                name: "Grau de Imobilização dos Recursos Não Correntes",
                valor: data.GrauImobilizacaoRNC,
              },
              {
                name: "Retorno s/ Patrimônio Líquido (RSPL)",
                valor: data.RentabilidadePL,
              },
              {
                name: "Composição do Endividamento",
                valor: data.ComposicaoEndividamento,
              },
              {
                name: "Multiplicador da Alavancagem Financeira",
                valor: data.MultiplicadorAlavancagemFinanceira,
              },
              {
                name: "Alavancagem Financeira",
                valor: data.AlavancagemFinanceira,
              },
              { name: "ROI DuPont", valor: data.ROIDuPont },
              {
                name: "Prazo Médio Renovação Estoques (PMRE)",
                valor: data.PMRE,
              },
              {
                name: "Prazo Médio Recebimento Vendas (PMRV)",
                valor: data.PMRV,
              },
              { name: "Prazo Médio Pagamento Contas (PMPC)", valor: data.PMPC },
              { name: "Ciclo Financeiro", valor: data.CicloFinanceiro },
              { name: "Ano", valor: data.ano },
            ]}
          />
        </div>
      </main>
    </div>
  );
};

export default FinanceStatCards;
