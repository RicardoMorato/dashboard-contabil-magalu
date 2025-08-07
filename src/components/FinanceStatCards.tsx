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
  const indicatorsData = [
    { name: "Liquidez Corrente", valor: data.LiquidezCorrente },
    { name: "Liquidez Seca", valor: data.LiquidezSeca },
    { name: "Endividamento Geral", valor: data.EndividamentoGeral },
    { name: "Giro do Ativo", valor: data.GiroAtivo },
    { name: "Margem Líquida", valor: data.MargemLiquida },
    { name: "Retorno s/ Ativo", valor: data.RentabilidadeAtivo },
  ];

  const othersIndicator = [
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
    { name: "Alavancagem Financeira", valor: data.AlavancagemFinanceira },
    { name: "ROI DuPont", valor: data.ROIDuPont },
    { name: "Prazo Médio Renovação Estoques (PMRE)", valor: data.PMRE },
    { name: "Prazo Médio Recebimento Vendas (PMRV)", valor: data.PMRV },
    { name: "Prazo Médio Pagamento Contas (PMPC)", valor: data.PMPC },
    { name: "Ciclo Financeiro", valor: data.CicloFinanceiro },
    { name: "Ano", valor: data.ano },
  ];

  const lucroLiquidoNumber = Number(
    data.lucroLiquido.replace(/\./g, "").replace(",", ".").trim()
  );

  return (
    <div className="flex-1 bg-gray-100 relative z-10">
      <main className="max-w-7xl mx-auto p-8">
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
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FinanceIndicatorsChart />
            <FinanceLineChart />
          </div>
          <OtherFinanceIndicatorsTable data={othersIndicator} />
        </div>
      </main>
    </div>
  );
};

export default FinanceStatCards;
