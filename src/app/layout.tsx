import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MJ Serviços | Desentupimento, Limpezas, Elétrica e Telhado em São Paulo",
  description:
    "MJ Serviços em São Paulo: desentupimento, limpezas, limpeza de caixa d'água, elétrica, telhado, dedetização, reformas e reparos. Atendimento pelo WhatsApp (11) 96727-3555.",
  keywords: [
    "MJ Serviços",
    "desentupimento em São Paulo",
    "limpeza de caixa d'água",
    "limpeza de caixa de gordura",
    "eletricista em São Paulo",
    "telhadista",
    "conserto de telhado",
    "limpeza de calha",
    "instalação de rufos",
    "dedetização",
    "reformas",
    "Guarulhos",
    "Osasco",
    "Santo André",
    "São Bernardo",
    "Barueri",
    "Alphaville",
  ],
  openGraph: {
    title: "MJ Serviços | Soluções profissionais em São Paulo",
    description:
      "Desentupimento, limpezas, elétrica, telhado, reformas e dedetização para residências, comércios, condomínios e empresas.",
    locale: "pt_BR",
    type: "website",
  },
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
