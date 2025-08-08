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
            Em 2022, a empresa apresentou receita líquida de R$ 37,3 bilhões e
            prejuízo líquido de R$ 499 milhões, mostrando que os custos e
            despesas superaram a receita operacional, impactando negativamente a
            rentabilidade. O ativo total foi de R$ 37,8 bilhões e o patrimônio
            líquido de R$ 10,6 bilhões, indicando uma estrutura patrimonial
            sólida, mas com forte endividamento. A liquidez geral em 1,01 indica
            capacidade moderada de cumprir obrigações de curto prazo, enquanto a
            liquidez imediata de 0,48 revela que, ao considerar apenas os ativos
            mais líquidos, a empresa pode enfrentar dificuldades para honrar
            dívidas imediatas. A participação de capitais de terceiros foi alta,
            em 254,93%, refletindo grande dependência de financiamento externo,
            o que aumenta o risco financeiro e a vulnerabilidade em períodos de
            crise. O grau de imobilização do patrimônio líquido em 96% mostra
            que a maior parte dos recursos próprios está investida em ativos
            fixos, limitando a liquidez. O retorno sobre patrimônio líquido
            (RSPL) de 37,04% indica a rentabilidade para os acionistas, mas deve
            ser interpretado com cautela devido ao prejuízo líquido. O
            multiplicador da alavancagem financeira em 2,06 aponta que a empresa
            usa recursos de terceiros para potencializar seu patrimônio,
            aumentando ganhos ou perdas. Os prazos médios — renovação de
            estoques em 89 dias, recebimento de vendas em 58 dias e pagamento de
            contas em 92 dias — mostram que a empresa demora mais para pagar
            fornecedores do que para receber clientes, resultando em um ciclo
            financeiro de 55 dias, que representa o período em que o capital
            está investido no ciclo operacional.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-2 text-blue-700">2023</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Em 2023, a receita líquida manteve-se próxima a R$ 36,8 bilhões, mas
            o prejuízo líquido quase dobrou para R$ 979 milhões, refletindo
            maiores desafios na gestão de custos e receitas. O ativo total foi
            de R$ 37,5 bilhões e o patrimônio líquido caiu para R$ 9,6 bilhões,
            indicando redução na base patrimonial da empresa. A liquidez geral
            caiu para 0,98, e a liquidez imediata para 0,38, o que sugere que a
            empresa teve menor capacidade de liquidar suas obrigações de curto
            prazo, principalmente sem considerar estoques. A participação de
            capitais de terceiros aumentou para 289,72%, elevando ainda mais o
            risco financeiro e a dependência de dívida. O grau de imobilização
            do patrimônio líquido subiu para 104%, indicando que o investimento
            em ativos fixos ultrapassa o capital próprio disponível,
            potencialmente limitando a flexibilidade financeira. O retorno sobre
            patrimônio líquido (RSPL) caiu para 28,84%, evidenciando menor
            rentabilidade para os acionistas. O multiplicador da alavancagem
            financeira manteve-se em 2,06, indicando que a estrutura de capital
            continuou usando recursos de terceiros para alavancar o patrimônio.
            Os prazos médios se prolongaram — renovação de estoques em 93 dias,
            recebimento em 62 dias e pagamento em 108 dias —, porém o ciclo
            financeiro diminuiu para 47 dias, o que pode indicar melhor gestão
            do capital de giro mesmo com prazos maiores.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-2 text-blue-700">2024</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Em 2024, a empresa mostrou sinais de recuperação com melhora nos
            indicadores financeiros. A liquidez geral subiu para 1,03, indicando
            maior capacidade de cumprir dívidas de curto prazo, embora a
            liquidez imediata tenha permanecido baixa em 0,35, demonstrando
            dependência dos estoques para a liquidez imediata. A participação de
            capitais de terceiros reduziu-se para 229,63%, o que diminui o risco
            financeiro. O grau de imobilização do patrimônio líquido também caiu
            para 92,97%, aumentando a flexibilidade financeira. O retorno sobre
            patrimônio líquido aumentou para 33,08%, refletindo melhor geração
            de valor para os acionistas. O multiplicador da alavancagem
            financeira subiu para 2,63, sugerindo maior uso de capital de
            terceiros para potencializar os resultados. Os prazos médios ficaram
            estáveis: renovação de estoques em 91 dias, recebimento em 56 dias e
            pagamento em 98 dias, com ciclo financeiro em 49 dias, evidenciando
            boa gestão do capital de giro.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
