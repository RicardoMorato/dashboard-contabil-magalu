import FinanceStatCards from "@/components/FinanceStatCards";

const data2023 = {
  ano: "2023",
  lucroLiquido: "-979.104.000",
  receitaLiquida: "36.768.149.000",
  ativoTotal: "37.455.067.000",
  patrimonioLiquido: "9.610.534.000",
  EndividamentoGeral: "59,57%",
  ParticipacaoCapitaisTerceiros: "289,72%",
  ComposicaoEndividamento: "62,50%",
  GrauImobilizacaoPL: "104,00%",
  GrauImobilizacaoRNC: "86,00%",
  LiquidezGeral: 0.98,
  LiquidezCorrente: 1.35,
  LiquidezSeca: 1.02,
  LiquidezImediata: 0.38,
  GiroAtivo: 0.75,
  MargemLiquida: "18,67%",
  RentabilidadeAtivo: "14,00%",
  RentabilidadePL: "28,84%",
  MultiplicadorAlavancagemFinanceira: 2.06,
  ROIDuPont: "14,00%",
  AlavancagemFinanceira: 2.06,
  PMRE: "93 dias",
  PMRV: "62 dias",
  PMPC: "108 dias",
  CicloFinanceiro: "47 dias",
};

const page = () => {
  return <FinanceStatCards data={data2023} />;
};

export default page;
