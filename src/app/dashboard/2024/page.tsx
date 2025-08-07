import FinanceStatCards from "@/components/FinanceStatCards";

const data2024 = {
  ano: "2024",
  lucroLiquido: "448.717.000",
  receitaLiquida: "38.038.068.000",
  ativoTotal: "37.311.858.000",
  patrimonioLiquido: "11.319.262.000",

  EndividamentoGeral: "61,11%",
  ParticipacaoCapitaisTerceiros: "229,63%",
  ComposicaoEndividamento: "64,28%",
  GrauImobilizacaoPL: "92,97%",
  GrauImobilizacaoRNC: "55,00%",
  LiquidezGeral: 1.03,
  LiquidezCorrente: 1.3,
  LiquidezSeca: 1.0,
  LiquidezImediata: 0.35,
  GiroAtivo: 0.72,
  MargemLiquida: "17,50%",
  RentabilidadeAtivo: "12,60%",
  RentabilidadePL: "33,08%",
  MultiplicadorAlavancagemFinanceira: 2.63,
  ROIDuPont: "12,60%",
  AlavancagemFinanceira: 2.63,
  PMRE: "91 dias",
  PMRV: "56 dias",
  PMPC: "98 dias",
  CicloFinanceiro: "49 dias",
};

const page = () => {
  return <FinanceStatCards data={data2024} />;
};

export default page;
