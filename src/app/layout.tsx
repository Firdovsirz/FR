import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Correct path to the favicon */}
        <link rel="icon" href="/assets/avatar.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}