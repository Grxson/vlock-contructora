import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import Proyectos from "./components/Proyectos";

export const metadata = {
  title: 'Vlock Constructora',
  description: 'Vlock Constructora'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {children}
        {/*<Proyectos />*/}
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  );
}
