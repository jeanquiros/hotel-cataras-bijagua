import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hotel Cataras Bijagua | Luxury Eco-Lodge in Costa Rica",
  description:
    "Experience luxury eco-lodging in Bijagua de Upala. Surrounded by Miravalles and Tenorio Volcano National Parks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-luxury-cream text-luxury-charcoal font-body">
        {children}
      </body>
    </html>
  );
}
