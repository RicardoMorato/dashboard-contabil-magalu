import FinanceStatCards from "@/components/FinanceStatCards";

  const data2022 = {
    lucroLiquido: "-498.975",
    receitaLiquida: "37.299.002",
    ativoTotal: "37.765.845",
    patrimonioLiquido: "10.648.701"
  };

const page = () => {
  return (
    <FinanceStatCards data={data2022}/>
  );
};

export default page;
