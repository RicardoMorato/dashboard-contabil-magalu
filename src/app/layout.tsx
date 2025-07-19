import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="flex min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
