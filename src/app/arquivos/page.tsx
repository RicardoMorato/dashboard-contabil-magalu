const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-800 mb-10 text-center">
        Baixe os relatórios contábeis da Magazine Luiza
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
          <h2 className="text-xl font-semibold mb-4">
            Relatório Contábil 2022 e 2023
          </h2>
          <p className="text-gray-600 mb-6">
            Relatório completo do ano fiscal de 2022 e 2023 da Magazine Luiza.
          </p>
          <a
            href="https://ri.magazineluiza.com.br/Download.aspx?Arquivo=m4+3Hf24hD8w4AZnpHdpHg=="
            download
            className="self-start px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
          >
            Baixar PDF
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
          <h2 className="text-xl font-semibold mb-4">
            Relatório Contábil 2023 e 2024
          </h2>
          <p className="text-gray-600 mb-6">
            Relatório completo do ano fiscal de 2023 e 2024 da Magazine Luiza.
          </p>
          <a
            href="https://ri.magazineluiza.com.br/Download/ITR-DFP?=TxidOAMhWp3Vd42Ed8uiyQ==&linguagem=pt"
            download
            className="self-start px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
          >
            Baixar PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
