import FinanceStatCards from "@/components/FinanceStatCards";

const data2023 = {
  ano: "2023",
  lucroLiquido: "-979.104.000",
  receitaLiquida: "36.768.149.000",
  ativoTotal: "37.455.067.000",
  patrimonioLiquido: "9.610.534.000",
  liquidezCorrente: 1.16,
  liquidezSeca: 0.73,
  endividamento: 2.90,
  giroDoAtivo: 0.98,
  margemLiquida: -2.7,
  retornoSobreAtivo: -2.6,

  liquidezGeral: 0.98,
  composicaoDivida: 64.3,
  participacaoCapitaisTerceiros: 2.9,
  rspl: -10.2,
  pmre: 93,
  pmrv: 62,
  pmpc: 108,
  cicloOperacional: 155,
  cicloFinanceiro: 47,
};

const page = () => {
  return <FinanceStatCards data={data2023} />;
};

export default page;
