import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bioestimulador de colágeno no rosto | Dra. Paula Sian",
  description: "Eu avalio a sua pele e explico se o bioestimulador de colágeno faz sentido para você. Dra. Paula Sian, dermatologista em São Paulo.",
  icons: { icon: "/favicon.png" },
  openGraph: { title: "Bioestimulador de colágeno no rosto | Dra. Paula Sian", description: "Eu avalio a sua pele antes de indicar qualquer procedimento.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
