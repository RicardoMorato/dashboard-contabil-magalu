import FinanceStatCards from "@/components/FinanceStatCards";

const data2022 = {
  ano: "2022",
  lucroLiquido: "-498.975.000",
  receitaLiquida: "37.299.002.000",
  ativoTotal: "37.765.845.000",
  patrimonioLiquido: "10.648.701.000",
  liquidezCorrente: 1.48,
  liquidezSeca: 0.95,
  endividamento: 2.54,
  giroDoAtivo: 0.99,
  margemLiquida: -1.3,
  retornoSobreAtivo: -1.3,

  liquidezGeral: 0.98,
  composicaoDivida: 64.3,
  participacaoCapitaisTerceiros: 2.55,
  rspl: -4.7,
  pmre: 89,
  pmrv: 58,
  pmpc: 92,
  cicloOperacional: 147,
  cicloFinanceiro: 55,
  imPL: 1.49,
  irnc: 0.69,
};

const page = () => {
  return <FinanceStatCards data={data2022} />;
};

export default page;
