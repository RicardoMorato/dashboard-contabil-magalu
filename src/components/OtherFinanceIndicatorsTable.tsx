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

  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-5">
      <h2 className="text-base font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
        {title}
      </h2>
      <div className="space-y-2">
        {data.map((item, idx) => {
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
