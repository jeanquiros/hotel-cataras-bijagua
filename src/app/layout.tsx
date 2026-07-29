import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Cataratas Bijagua Lodge — Entre Miravalles y Tenorio",
  description:
    "Bungalows de montaña en Bijagua de Upala, a las puertas del Parque Nacional Volcán Miravalles y a veinte minutos del Río Celeste.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
