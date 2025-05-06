import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Proyectos from "./components/Proyectos";
import WhatsappButton from "./components/WhatsappButton";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Testimonials from "./components/Testimonials";

export const metadata = {
  title: 'Vlock Constructora',
  description: 'Vlock Constructora'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <Navbar />
        {children}
        {/*<Proyectos />*/}
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  );
}
