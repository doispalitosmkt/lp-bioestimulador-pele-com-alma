import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bioestimulador de colágeno no rosto | Dra. Paula Sian",
  description: "Entenda se o bioestimulador de colágeno é indicado para a sua pele. Avaliação dermatológica individualizada com a Dra. Paula Sian.",
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "Bioestimulador de colágeno no rosto | Dra. Paula Sian", description: "Uma avaliação honesta antes de indicar qualquer procedimento.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
