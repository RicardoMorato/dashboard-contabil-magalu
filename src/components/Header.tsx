"use client";

import Link from "next/link";
import Image from "next/image";
import { Home, FileText, Info, Menu, BarChart, BookOpen } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`bg-blue-700 text-white flex flex-col transition-all duration-300
        ${isCollapsed ? "w-20 items-center" : "w-64"}`}
    >
      <div className="flex justify-end w-full p-4">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="cursor-pointer"
        >
          <Menu size={24} />
        </button>
      </div>

      <div
        className={`flex flex-col items-center p-4 transition-all duration-300 
          ${isCollapsed ? "gap-1" : "gap-2"}`}
      >
        <div
          className={`relative rounded-full overflow-hidden border-3 border-white
            ${isCollapsed ? "w-16 h-16" : "w-24 h-24"}`}
        >
          <Image
            src="/logo-magalu.jpg"
            alt="Logo da Magalu"
            fill
            className="object-cover"
          />
        </div>
        {!isCollapsed && (
          <span className="mt-2 font-semibold text-lg">Magalu Dashboard</span>
        )}
      </div>

      <nav className="flex-1 w-full">
        <ul className="flex flex-col space-y-2 p-2">
          <li>
            <Link
              href="/"
              className="flex items-center px-4 py-2 gap-2 rounded-md hover:bg-blue-800 transition-colors"
            >
              <Home size={24} />
              {!isCollapsed && "Início"}
            </Link>
          </li>
          <li>
            <Link
              href="/arquivos"
              className="flex items-center px-4 py-2 gap-2 rounded-md hover:bg-blue-800 transition-colors"
            >
              <FileText size={24} />
              {!isCollapsed && "Arquivos"}
            </Link>
          </li>
          <li>
            <Link
              href="/analises"
              className="flex items-center px-4 py-2 gap-2 rounded-md hover:bg-blue-800 transition-colors"
            >
              <BarChart size={24} />
              {!isCollapsed && "Análises"}
            </Link>
          </li>
          <li>
            <Link
              href="/indicadores"
              className="flex items-center px-4 py-2 gap-2 rounded-md hover:bg-blue-800 transition-colors"
            >
              <BookOpen size={24} />
              {!isCollapsed && "Indicadores"}
            </Link>
          </li>
          <li>
            <Link
              href="/sobre"
              className="flex items-center px-4 py-2 gap-2 rounded-md hover:bg-blue-800 transition-colors"
            >
              <Info size={24} />
              {!isCollapsed && "Sobre"}
            </Link>
          </li>
        </ul>
      </nav>

      {!isCollapsed && (
        <footer className="p-4 text-xs text-blue-200">© 2025 Magalu</footer>
      )}
    </aside>
  );
};

export default Header;
