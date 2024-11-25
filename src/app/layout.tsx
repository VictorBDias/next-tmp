import type { Metadata } from "next";
import { type_second } from "@/utils/fonts";

import "./globals.css";
import { Header } from "@/components";
import StyledComponentsRegistry from "@/lib/registry";

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
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
