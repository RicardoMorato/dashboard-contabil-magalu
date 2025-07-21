import StatCard from "@/components/StatCard";
import { DollarSign, ShoppingBag, Database, Layers } from "lucide-react";
import FinanceIndicatorsChart from "@/components/FinanceIndicatorsChart";

type FinanceData = {
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
  return (
    <div className="flex-1 overflow-auto bg-gray-100 min-h-screen relative z-10">
      <main className="max-w-7xl mx-auto py-6 px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatCard
            name={
              Number(
                data.lucroLiquido.replace(/\./g, "").replace(",", ".").trim()
              ) < 0
                ? "Prejuízo Líquido"
                : "Lucro Líquido"
            }
            icon={DollarSign}
            value={`R$ ${data.lucroLiquido}`}
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
