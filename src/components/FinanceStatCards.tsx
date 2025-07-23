import StatCard from "@/components/StatCard";
import { DollarSign, ShoppingBag, Database, Layers } from "lucide-react";
import FinanceIndicatorsChart from "@/components/FinanceIndicatorsChart";

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
        </div>
      </main>
    </div>
  );
};

export default FinanceStatCards;
