import FinanceStatCards from "@/components/FinanceStatCards";

const data2023 = {
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
};

const page = () => {
  return <FinanceStatCards data={data2023} />;
};

export default page;
