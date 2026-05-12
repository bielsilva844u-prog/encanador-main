import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MJ Serviços e Soluções | Desentupimento, Limpezas e Dedetização",
  description: "MJ Serviços e Soluções: desentupimento, limpezas e dedetização em São Paulo e região. Atendimento pelo WhatsApp (11) 96727-3555.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
