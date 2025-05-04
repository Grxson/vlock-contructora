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
      <body style={{ margin: 0, padding: 0 }}>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          {children}
          {/*<Proyectos />*/}
          <Proyectos />

        </div>
        <WhatsappButton />
        <Footer />
      </body>

    </html>
  );
}
