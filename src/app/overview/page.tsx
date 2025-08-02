import Link from "next/link";
import { BarChart2 } from "lucide-react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800 flex items-center justify-center gap-3">
          <BarChart2 className="w-10 h-10 text-blue-700" />
          Dashboard Financeiro
        </h1>
        <p className="text-gray-600 mt-3 text-base max-w-xl">
          Visualize e compare os principais indicadores financeiros da Magazine
          Luiza nos anos de 2022, 2023 e 2024.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
        <Link
          href="/dashboard/2022"
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-6 rounded-xl shadow-md text-center transition transform hover:scale-105"
        >
          Dashboard 2022
        </Link>

        <Link
          href="/dashboard/2023"
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-6 rounded-xl shadow-md text-center transition transform hover:scale-105"
        >
          Dashboard 2023
        </Link>

        <Link
          href="/dashboard/2024"
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-6 rounded-xl shadow-md text-center transition transform hover:scale-105"
        >
          Dashboard 2024
        </Link>
      </div>

      <footer className="mt-12 text-gray-500 text-sm">
        Projeto acadêmico • Contabilidade de Custos e Gerencial – 2025.1
      </footer>
    </div>
  );
};

export default page;
