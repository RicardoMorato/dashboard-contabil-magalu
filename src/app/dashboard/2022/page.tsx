import FinanceStatCards from "@/components/FinanceStatCards";

const data2022 = {
  ano: "2022",
  lucroLiquido: "-498.975.000",
  receitaLiquida: "37.299.002.000",
  ativoTotal: "37.765.845.000",
  patrimonioLiquido: "10.648.701.000",
  EndividamentoGeral: "56,78%",
  ParticipacaoCapitaisTerceiros: "254,93%",
  ComposicaoEndividamento: "54,70%",
  GrauImobilizacaoPL: "96,00%",
  GrauImobilizacaoRNC: "52,00%",
  LiquidezGeral: 1.01,
  LiquidezCorrente: 1.38,
  LiquidezSeca: 1.04,
  LiquidezImediata: 0.48,
  GiroAtivo: 0.79,
  MargemLiquida: "20,39%",
  RentabilidadeAtivo: "16,04%",
  RentabilidadePL: "37,04%",
  MultiplicadorAlavancagemFinanceira: 2.06,
  ROIDuPont: "16,04%",
  AlavancagemFinanceira: 2.06,
  PMRE: "89 dias",
  PMRV: "58 dias",
  PMPC: "92 dias",
  CicloFinanceiro: "55 dias",
};

const page = () => {
  return <FinanceStatCards data={data2022} />;
};

export default page;
