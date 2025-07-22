const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-800 mb-10 text-center">
        Análise dos Resultados
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-2 text-blue-700">2022</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Prejuízo de R$ 499 mi apesar da receita alta (R$ 37,3 bi). 
            Margem líquida negativa (-1,3%) e endividamento elevado (2,54) mostram dificuldades financeiras. 
            Liquidez corrente de 1,48 razoável, liquidez seca 0,95 indica dependência de estoques. 
            Giro do ativo de 0,99 revela que os ativos quase geraram receita equivalente, mas retorno sobre ativo negativo (-1,3%) mostra baixa rentabilidade.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-2 text-blue-700">2023</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Prejuízo quase dobrou (R$ 979 mi) com leve queda na receita (R$ 36,8 bi). 
            Margem líquida piorou (-2,7%) e endividamento subiu para 2,9, aumentando dependência de dívidas. 
            Liquidez corrente caiu para 1,16 e liquidez seca para 0,73, piorando capacidade de pagamento sem estoques. 
            Giro do ativo ficou em 0,98 e retorno sobre ativo caiu mais (-2,6%), reforçando crise.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-2 text-blue-700">2024</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Recuperação com lucro de R$ 449 mi e receita maior (R$ 38 bi). 
            Margem líquida positiva (1,2%) e redução do endividamento (2,3) sinalizam melhora financeira. 
            Liquidez corrente estável (1,17) mas liquidez seca baixa (0,71) mantém alerta. 
            Giro do ativo subiu para 1,02 e retorno sobre ativo positivo (1,2%), indicando eficiência e retomada da rentabilidade.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
