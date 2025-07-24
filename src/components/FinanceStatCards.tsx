import StatCard from "@/components/StatCard";
import { DollarSign, ShoppingBag, Database, Layers } from "lucide-react";
import FinanceIndicatorsChart from "@/components/FinanceIndicatorsChart";
import OtherFinanceIndicatorsTable from "./OtherFinanceIndicatorsTable";

type FinanceData = {
  ano: string;
  lucroLiquido: string;
  receitaLiquida: string;
  ativoTotal: string;
  patrimonioLiquido: string;

  liquidezCorrente: number;
  liquidezSeca: number;
  endividamento: number;
  giroDoAtivo: number;
  margemLiquida: number;
  retornoSobreAtivo: number;

  liquidezGeral: number;
  participacaoCapitaisTerceiros: number;
  rspl: number;
  pmre: number;
  pmrv: number;
  pmpc: number;
  cicloOperacional: number;
  cicloFinanceiro: number;
};

interface FinanceStatCardsProps {
  data: FinanceData;
}

const FinanceStatCards: React.FC<FinanceStatCardsProps> = ({ data }) => {
  const indicatorsData = [
    { name: "Liquidez Corrente", valor: data.liquidezCorrente },
    { name: "Liquidez Seca", valor: data.liquidezSeca },
    { name: "Endividamento", valor: data.endividamento },
    { name: "Giro do Ativo", valor: data.giroDoAtivo },
    { name: "Margem Líquida", valor: data.margemLiquida },
    { name: "Retorno s/ Ativo", valor: data.retornoSobreAtivo },
  ];

  const othersIndicator = [
    { name: "Liquidez Geral", valor: data.liquidezGeral },
    {
      name: "Participação de Capitais de Terceiros",
      valor: data.participacaoCapitaisTerceiros,
    },
    { name: "Retorno s/ Patrimônio Líquido (RSPL) ", valor: data.rspl },
    { name: "Prazo Médio Renovação Estoques (PMRE)", valor: data.pmre },
    { name: "Prazo Médio Recebimento Vendas (PMRV)", valor: data.pmrv },
    { name: "Prazo Médio Pagamento Contas (PMPC)", valor: data.pmpc },
    { name: "Ciclo Operacional", valor: data.cicloOperacional },
    { name: "Ciclo Financeiro", valor: data.cicloFinanceiro },
  ];

  const lucroLiquidoNumber = Number(
    data.lucroLiquido.replace(/\./g, "").replace(",", ".").trim()
  );

  return (
    <div className="flex-1 overflow-auto bg-gray-100 min-h-screen relative z-10">
      <main className="max-w-7xl mx-auto py-6 px-6 lg:px-8">
        <h1 className="text-base font-bold text-blue-700 mb-2 flex items-center gap-2">
          Dashboard {data.ano}
        </h1>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FinanceIndicatorsChart data={indicatorsData} />
          <OtherFinanceIndicatorsTable data={othersIndicator} />
        </div>
      </main>
    </div>
  );
};

export default FinanceStatCards;
