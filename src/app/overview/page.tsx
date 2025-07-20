import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-800 mb-10 text-center">
        Acesse o Dashboard
      </h1>

      <div className="max-w-4xl w-full flex justify-around gap-6">
        <Link
          href="/dashboard/2022"
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-12 py-6 rounded-lg shadow-md transition-colors duration-300 flex-1 text-center"
        >
          Dashboard 2022
        </Link>

        <Link
          href="/dashboard/2023"
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-12 py-6 rounded-lg shadow-md transition-colors duration-300 flex-1 text-center"
        >
          Dashboard 2023
        </Link>

        <Link
          href="/dashboard/2024"
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-12 py-6 rounded-lg shadow-md transition-colors duration-300 flex-1 text-center"
        >
          Dashboard 2024
        </Link>
      </div>
    </div>
  );
};

export default page;
