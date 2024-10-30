import type { Metadata } from "next";
import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "QR Generator",
  description: "Create your QR code and keep track of it.",
  icons: [{ rel: "icon", type: "image/ico", url: "/favicon/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${rubik.className}`}>{children}</body>
    </html>
  );
}
