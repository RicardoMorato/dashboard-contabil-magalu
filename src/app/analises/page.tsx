const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-800 mb-10 text-center">
        Análise dos Resultados
      </h1>

      <div className="grid grid-cols-1 gap-6 max-w-5xl w-full">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-2 text-blue-700">2022</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Em 2022, a empresa obteve uma receita líquida robusta de R$ 37,3
            bilhões, mas terminou o ano com um prejuízo de R$ 499 milhões,
            refletido na margem líquida negativa de -1,3%. A elevada alavancagem
            financeira ficou evidente no índice de endividamento de 2,54,
            indicando forte dependência de capitais de terceiros e maior risco
            financeiro. A liquidez corrente de 1,48 mostrou capacidade razoável
            para cumprir dívidas de curto prazo, mas a liquidez seca de 0,95
            alertou para a vulnerabilidade ao considerar apenas os ativos mais
            líquidos, sem estoques. O giro do ativo de 0,99 sugeriu que quase
            todo o ativo foi convertido em receita, mas o retorno sobre ativo
            negativo (-1,3%) mostrou baixa eficiência operacional. As
            alavancagens operacional (GAO), financeira (GAF) e total (GAT)
            ficaram altas, ampliando os efeitos das oscilações nos resultados
            operacionais sobre a rentabilidade. O ROE (Retorno sobre Patrimônio
            Líquido) foi negativo, demonstrando que a empresa não gerou valor
            para o acionista.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-2 text-blue-700">2023</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Em 2023, o cenário piorou: o prejuízo quase dobrou para R$ 979
            milhões, mesmo com receita líquida relativamente estável (R$ 36,8
            bilhões). A margem líquida caiu para -2,7%, evidenciando maior
            dificuldade de transformar vendas em lucro. O endividamento aumentou
            para 2,9, elevando ainda mais a alavancagem financeira e o risco. A
            liquidez corrente (1,16) e a liquidez seca (0,73) recuaram,
            comprometendo a capacidade de pagamento imediato das dívidas,
            especialmente sem considerar estoques. O giro do ativo manteve-se em
            0,98, mas o retorno sobre ativo piorou para -2,6%, sinalizando maior
            ineficiência na gestão operacional. Os indicadores de alavancagem
            GAO, GAF e GAT ficaram mais altos, ampliando o impacto das
            oscilações operacionais nos prejuízos. O ROE seguiu negativo,
            reforçando que a empresa destruiu valor para os acionistas nesse
            período.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-2 text-blue-700">2024</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Em 2024, a empresa conseguiu uma recuperação significativa. O lucro
            líquido alcançou R$ 449 milhões, e a receita líquida subiu para R$
            38 bilhões. A margem líquida voltou a ficar positiva (1,2%),
            indicando melhora na eficiência operacional. O endividamento caiu
            para 2,3, reduzindo a alavancagem financeira e o risco de exposição
            ao capital de terceiros. Apesar disso, a liquidez corrente
            permaneceu estável em 1,17, e a liquidez seca ainda foi baixa
            (0,71), mostrando que parte da solidez financeira depende dos
            estoques. O giro do ativo aumentou para 1,02, refletindo maior
            eficiência na conversão de ativos em receita, e o retorno sobre
            ativo voltou a ser positivo (1,2%), sinalizando retomada da
            rentabilidade operacional. O ROE (Retorno sobre Patrimônio Líquido)
            também apresentou melhora, indicando geração de valor aos
            acionistas. Houve redução dos efeitos das alavancagens GAO, GAF e
            GAT, evidenciando que a empresa conseguiu equilibrar melhor o uso de
            dívidas e controlar custos fixos, fortalecendo sua estrutura
            financeira.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
