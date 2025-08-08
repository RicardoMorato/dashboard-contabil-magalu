const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-800 mb-10 text-center">
        Sobre o Dashboard
      </h1>

      <div className="grid grid-cols-1 gap-6 max-w-5xl w-full">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-1">Sobre</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-left">
            Este dashboard foi realizado como um projeto da disciplina de
            Contabilidade de Custos e Gerencial. Ele reúne e analisa os
            relatórios contábeis da Magazine Luiza dos anos de 2022, 2023 e
            2024. Com ele, é possível visualizar diversos indicadores
            financeiros e compreender melhor os motivos por trás dos resultados
            apresentados nesses períodos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-1">O que o projeto faz</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Centraliza os dados contábeis da empresa por ano em um único dashboard.
              </li>
              <li>
                Facilita a visualização de informações financeiras ao longo dos
                anos.
              </li>
              <li>
                Apresenta análises horizontais e verticais para comparar
                evolução e estrutura.
              </li>
              <li>
                Gera indicadores de liquidez, rentabilidade, endividamento e atividade.
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-1">Fontes e metodologia</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Dados extraídos diretamente dos relatórios oficiais divulgados
                pela Magazine Luiza.
              </li>
              <li>
                Utilização de técnicas de análise contábil (horizontal, vertical
                e índices).
              </li>
              <li>
                Construção de dashboards interativos para tornar as informações
                mais acessíveis.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
