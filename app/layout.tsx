import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Исток",
  description: "Сайт жилого проекта Исток",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}