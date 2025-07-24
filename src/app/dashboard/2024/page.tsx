import FinanceStatCards from "@/components/FinanceStatCards";

const data2024 = {
  ano: "2024",
  lucroLiquido: "448.717.000",
  receitaLiquida: "38.038.068.000",
  ativoTotal: "37.311.858.000",
  patrimonioLiquido: "11.319.262.000",
  liquidezCorrente: 1.17,
  liquidezSeca: 0.71,
  endividamento: 2.30,
  giroDoAtivo: 1.02,
  margemLiquida: 1.2,
  retornoSobreAtivo: 1.2,

  liquidezGeral: 1.01,
  composicaoDivida: 64.3,
  participacaoCapitaisTerceiros: 2.3,
  rspl: 4.0,
  pmre: 91,
  pmrv: 56,
  pmpc: 98,
  cicloOperacional: 147,
  cicloFinanceiro: 49,
};

const page = () => {
  return <FinanceStatCards data={data2024} />;
};

export default page;
