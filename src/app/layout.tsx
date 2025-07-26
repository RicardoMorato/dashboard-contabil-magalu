"use client";

import "./globals.css";
import Header from "@/components/Header";
import { SidebarProvider, useSidebar } from "@/context/SidebarContext";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen bg-gray-100">
        <SidebarProvider>
          <Header />
          <Content>{children}</Content>
        </SidebarProvider>
      </body>
    </html>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar();

  return (
    <main
      className={`transition-all duration-300 ${
        isCollapsed ? "ml-20 flex justify-center" : "ml-64"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto">{children}</div>
    </main>
  );
}
