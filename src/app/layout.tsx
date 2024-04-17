import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopbar from "./_components/NextTopbar";

import "./app.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Home | Next Init",
    template: "%s | Next Init"
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopbar />
        {children}
      </body>
    </html>
  );
}
