import type { Metadata } from "next";
import { type_second } from "@/utils/fonts";

import { Footer, Header } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Social Sync",
  description: "Social Sync dogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={type_second.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
