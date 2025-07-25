"use client";

import {
  DollarSign,
  Percent,
  TrendingUp,
  RefreshCcw,
  RotateCcw,
  BarChart3,
  Layers,
  Home,
  Clock,
  Repeat,
} from "lucide-react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-800 mb-10 text-center">
        Explicação dos Termos
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-5xl w-full">
        <div className="bg-white rounded-lg shadow p-3 flex flex-col">
          <div className="flex items-center mb-1">
            <DollarSign className="text-blue-700 mr-1" size={24} />
            <h2 className="text-lg font-semibold">Lucro Líquido</h2>
          </div>
          <p className="text-gray-700 text-base leading-tight">
            Resultado final após todas as despesas, custos e impostos. Negativo
            indica prejuízo.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-3 flex flex-col">
          <div className="flex items-center mb-1">
            <Percent className="text-blue-700 mr-1" size={24} />
            <h2 className="text-lg font-semibold">Margem Líquida</h2>
          </div>
          <p className="text-gray-700 text-base leading-tight">
            Lucro para cada R$ 1 vendido. Ex.: margem de 1,2% = R$ 1,20 a cada
            R$ 100.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-3 flex flex-col">
          <div className="flex items-center mb-1">
            <RefreshCcw className="text-blue-700 mr-1" size={24} />
            <h2 className="text-lg font-semibold">Liquidez Corrente</h2>
          </div>
          <p className="text-gray-700 text-base leading-tight">
            Se a empresa consegue pagar dívidas de curto prazo com ativos
            circulantes. Quanto maior, melhor.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-3 flex flex-col">
          <div className="flex items-center mb-1">
            <RotateCcw className="text-blue-700 mr-1" size={24} />
            <h2 className="text-lg font-semibold">Liquidez Seca</h2>
          </div>
          <p className="text-gray-700 text-base leading-tight">
            Igual à liquidez corrente, mas desconsidera estoques. Quanto maior,
            melhor.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-3 flex flex-col">
          <div className="flex items-center mb-1">
            <TrendingUp className="text-blue-700 mr-1" size={24} />
            <h2 className="text-lg font-semibold">Endividamento</h2>
          </div>
          <p className="text-gray-700 text-base leading-tight">
            Quanto a empresa depende de dívidas em relação ao patrimônio. Quanto
            menor, melhor.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-3 flex flex-col">
          <div className="flex items-center mb-1">
            <RefreshCcw className="text-blue-700 mr-1" size={24} />
            <h2 className="text-lg font-semibold">Giro do Ativo</h2>
          </div>
          <p className="text-gray-700 text-base leading-tight">
            Mostra que a empresa gera mais receita em relação ao total de ativos
            que possui. Quanto maior, melhor.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-3 flex flex-col">
          <div className="flex items-center mb-1">
            <TrendingUp className="text-blue-700 mr-1" size={24} />
            <h2 className="text-lg font-semibold">Retorno sobre Ativo</h2>
          </div>
          <p className="text-gray-700 text-base leading-tight">
            Quanto de lucro a empresa gera em relação ao total de ativos. Quanto
            maior, melhor.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-3 flex flex-col">
          <div className="flex items-center mb-1">
            <BarChart3 className="text-blue-700 mr-1" size={24} />
            <h2 className="text-lg font-semibold">Receita Líquida</h2>
          </div>
          <p className="text-gray-700 text-base leading-tight">
            Total obtido com vendas após deduções de impostos, devoluções e
            descontos.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-3 flex flex-col">
          <div className="flex items-center mb-1">
            <Layers className="text-blue-700 mr-1" size={24} />
            <h2 className="text-lg font-semibold">Ativo Total</h2>
          </div>
          <p className="text-gray-700 text-base leading-tight">
            Soma de todos os bens e direitos da empresa.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-3 flex flex-col">
          <div className="flex items-center mb-1">
            <Home className="text-blue-700 mr-1" size={24} />
            <h2 className="text-lg font-semibold">Patrimônio Líquido</h2>
          </div>
          <p className="text-gray-700 text-base leading-tight">
            Capital próprio da empresa: ativos menos passivos.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-3 flex flex-col">
          <div className="flex items-center mb-1">
            <Repeat className="text-blue-700 mr-1" size={24} />
            <h2 className="text-lg font-semibold">Ciclos</h2>
          </div>
          <p className="text-gray-700 text-base leading-tight">
            Tempo que leva para transformar compras em vendas e receber por
            elas.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-3 flex flex-col">
          <div className="flex items-center mb-1">
            <Clock className="text-blue-700 mr-1" size={24} />
            <h2 className="text-lg font-semibold">Prazos Médios</h2>
          </div>
          <p className="text-gray-700 text-base leading-tight">
            Tempo médio para pagar, vender ou receber.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
