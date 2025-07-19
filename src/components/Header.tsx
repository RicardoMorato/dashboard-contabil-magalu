import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <aside className="h-screen w-64 bg-blue-700 text-white flex flex-col">
      <div className="flex justify-center items-center flex-col p-6">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-3 border-white">
          <Image
            src="/logo-magalu.jpg"
            alt="Logo da Magalu"
            fill
            className="object-cover"
          />
        </div>
        <span className="mt-2 font-semibold text-lg">Magalu Dashboard</span>
      </div>

      <nav className="flex-1">
        <ul className="flex flex-col space-y-2 p-4">
          <li>
            <Link
              href="/"
              className="flex items-center px-4 py-2 gap-2 rounded-md hover:bg-blue-800 transition-colors"
            >
              <Image src="/home.png" alt="Home" width={24} height={24} />
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/arquivos"
              className="flex items-center px-4 py-2 gap-2 rounded-md hover:bg-blue-800 transition-colors"
            >
              <Image src="/file.png" alt="Arquivos" width={24} height={24} />
              Arquivos
            </Link>
          </li>
          <li>
            <Link
              href="/sobre"
              className="flex items-center px-4 py-2 gap-2 rounded-md hover:bg-blue-800 transition-colors"
            >
              <Image src="/about.png" alt="Sobre" width={24} height={24} />
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
      <footer className="p-4 text-xs text-blue-200">© 2025 Magalu</footer>
    </aside>
  );
};

export default Header;
