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
            Apesar de uma receita elevada de R$ 37,3 bilhões, a empresa
            registrou um prejuízo de R$ 499 milhões. A margem líquida ficou
            negativa em -1,3%, refletindo dificuldades para transformar receita
            em lucro. O endividamento foi alto, em 2,54, mostrando grande
            dependência de capital de terceiros. A liquidez corrente de 1,48
            indica que a empresa tinha recursos para cobrir suas obrigações de
            curto prazo, mas a liquidez seca de 0,95 revela que, sem os
            estoques, essa capacidade ficava comprometida. O giro do ativo de
            0,99 demonstra que quase todo o valor investido em ativos foi
            convertido em receita, mas o retorno sobre ativo negativo (-1,3%)
            confirma a baixa rentabilidade
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-2 text-blue-700">2023</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            A situação financeira piorou: o prejuízo praticamente dobrou,
            chegando a R$ 979 milhões, enquanto a receita caiu um pouco para R$
            36,8 bilhões. A margem líquida recuou ainda mais, para -2,7%,
            reforçando as dificuldades operacionais. O endividamento aumentou
            para 2,9, intensificando o risco financeiro. As liquidezes corrente
            (1,16) e seca (0,73) pioraram, reduzindo a segurança para pagar
            dívidas de curto prazo sem contar com estoques. O giro do ativo
            permaneceu estável em 0,98, mas o retorno sobre ativo caiu para
            -2,6%, evidenciando maior ineficiência e aprofundamento da crise.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-2 text-blue-700">2024</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Houve uma virada positiva: a empresa obteve lucro de R$ 449 milhões
            e aumentou a receita para R$ 38 bilhões. A margem líquida voltou a
            ficar positiva, em 1,2%, e o endividamento caiu para 2,3, sugerindo
            mais controle sobre as dívidas. A liquidez corrente permaneceu quase
            estável em 1,17, mas a liquidez seca seguiu baixa em 0,71, mantendo
            o alerta sobre a dependência de estoques. O giro do ativo subiu para
            1,02, demonstrando maior eficiência na geração de receita, e o
            retorno sobre ativo voltou a ficar positivo (1,2%), sinalizando
            recuperação da rentabilidade.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
