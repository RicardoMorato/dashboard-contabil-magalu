import FinanceStatCards from "@/components/FinanceStatCards";

const data2024 = {
  lucroLiquido: "448.717",
  receitaLiquida: "38.038.068",
  ativoTotal: "37.311.858",
  patrimonioLiquido: "11.319.262",
};

const page = () => {
  return <FinanceStatCards data={data2024} />;
};

export default page;
