"use client";

import "./globals.css";
import Header from "@/components/Header";
import { SidebarProvider, useSidebar } from "@/context/SidebarContext";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/logo-magalu.jpg" />
        <title>Dashboard Contábil</title>
      </head>
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
