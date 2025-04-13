import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./Hooks/themeContext";
import { ModalProvider } from "./Hooks/modalContext";
import { ActiveItemProvider } from "./Hooks/ActiveItemToTheServiceComponentContext";
import { Navbar } from "@/components/NavbarComponent/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beescend",
  description:
    "Beefix es un sistema de gestión completo diseñado especialmente para negocios de reparación de dispositivos móviles. Con una interfaz intuitiva y herramientas potentes, Beescend te ayuda a organizar tu taller, mejorar la atención al cliente y aumentar la productividad de tu equipo. ✅ Registra y gestiona órdenes de servicio fácilmente, con todos los detalles técnicos del equipo y el historial del cliente. 📦 Controla tu inventario de repuestos y dispositivos en tiempo real. 📊 Accede a reportes claros y métricas clave para tomar mejores decisiones. 💬 Informa a tus clientes automáticamente por WhatsApp o email sobre el estado de sus reparaciones. 💳 Administra cobros y pagos, con facturación integrada. Ideal para negocios en crecimiento, Beescend se adapta a talleres de cualquier tamaño y te permite llevar el control desde cualquier dispositivo, en cualquier lugar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon por defecto (modo claro) */}
        <link
          rel="icon"
          href="/Img/logo scalarbee/AbejaNegra.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: light)"
        />
        {/* Favicon alternativo (modo oscuro) */}
        <link
          rel="icon"
          href="/Img/logo scalarbee/AbejaBlanca.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />

        {/* Alternativas para dispositivos Apple y otros */}
        <link
          rel="apple-touch-icon"
          href="/Img/logo scalarbee/AbejaNegra.svg"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="apple-touch-icon"
          href="/Img/logo scalarbee/AbejaBlanca.svg"
          media="(prefers-color-scheme: dark)"
        />

        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased scroll-smooth`}
      >
        <ActiveItemProvider>
          <ModalProvider>
            <ThemeProvider>
              <Navbar />
              {children}
            </ThemeProvider>
          </ModalProvider>
        </ActiveItemProvider>
      </body>
    </html>
  );
}
