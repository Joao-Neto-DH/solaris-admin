import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/component/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solaris Admin",
  description: "Solaris Admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
