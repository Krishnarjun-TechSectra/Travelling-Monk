
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Travelling Monk",
  description: "Explore the world with Travelling Monk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`antialiased text-base bg-blue-50/50 `}>
        {children}
      </body>
    </html>
  );
}
