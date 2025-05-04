import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Proyectos from "./components/Proyectos";
import WhatsappButton from "./components/WhatsappButton";
import Footer from "./components/Footer";

export const metadata = {
  title: 'Vlock Constructora',
  description: 'Vlock Constructora'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        {/*<Proyectos />*/}
        <Proyectos />
        <Footer />
      </body>
    </html>
  );
}
