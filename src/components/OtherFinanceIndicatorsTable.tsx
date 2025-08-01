import React from "react";

interface OtherFinanceIndicatorsTableProps {
  title?: string;
  data: { name: string; valor: number | string }[];
}

const OtherFinanceIndicatorsTable: React.FC<
  OtherFinanceIndicatorsTableProps
> = ({ title = "Outros Indicadores Financeiros", data }) => {
  const indicadoresComDias = [
    "Prazo Médio Renovação Estoques (PMRE)",
    "Prazo Médio Recebimento Vendas (PMRV)",
    "Prazo Médio Pagamento Contas (PMPC)",
    "Ciclo Operacional",
    "Ciclo Financeiro",
  ];

  const anoItem = data.find((item) => item.name.trim().toLowerCase() === "ano");
  const ano = anoItem ? anoItem.valor : "";

  const dataSemAno = data.filter(
    (item) => item.name.trim().toLowerCase() !== "ano"
  );

  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-5">
      <h2 className="text-lg font-semibold mb-4 pl-2 pt-3 pb-2 border-b border-gray-200 text-gray-700">
        {title} {ano && `do ano ${ano}`}
      </h2>
      <div className="space-y-2">
        {dataSemAno.map((item, idx) => {
          let valorExibido;

          if (
            item.name.trim().toLowerCase() ===
            "retorno s/ patrimônio líquido (rspl)".toLowerCase()
          ) {
            valorExibido = `${item.valor}%`;
          } else if (indicadoresComDias.includes(item.name)) {
            valorExibido = `${item.valor} dias`;
          } else {
            valorExibido = item.valor;
          }

          return (
            <div
              key={idx}
              className="flex justify-between items-center border-gray-600 border-b px-4 py-2"
            >
              <span className="text-gray-800 text-sm">{item.name}</span>
              <span className="text-blue-800 font-semibold text-sm">
                {valorExibido}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OtherFinanceIndicatorsTable;
