import FinanceStatCards from "@/components/FinanceStatCards";

const data2023 = {
  lucroLiquido: "-979.104",
  receitaLiquida: "36.768.149",
  ativoTotal: "37.455.067",
  patrimonioLiquido: "9.610.534",
};

const page = () => {
  return <FinanceStatCards data={data2023} />;
};

export default page;
