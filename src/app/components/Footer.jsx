import React from 'react';
import '../styles/Footer.css'
import Image from 'next/image';
import logoVlock from '../assets/logo-vlock.png';

function Footer() {
  return (
    <footer className="footer-container">

      <div className="footer-content">

        <div className="footer-left">
          <Image
            src={logoVlock}
            alt="VLOCK Constructora"
            className="footer-logo"
            priority
          />
        </div>


        <div className="footer-center">
          <h3>Nuestra ubicación</h3>
          <p><strong>Calle 12 # 3 - 45, Bogotá, Colombia <br /> (Estacionamiento para personas con discapacidad disponible)</strong></p>

        </div>


        <div className="footer-right">
          <h3>Horario de oficina</h3>
          <p><strong>De lunes a viernes <br />
            9:00 a.m. a 5:00 p.m.</strong></p>

        </div>
      </div>


      <div className="footer-bottom">
        {/* Sección legal */}
        <div className="footer-legal">
          <p>© Copyright NISG - 2023</p>
          <a href="#privacidad">Aviso de Privacidad</a>
          <a href="#reglamento">Reglamento HSE</a>
        </div>

        {/* Redes sociales */}
        <div className="footer-socials">
          <a href="#facebook" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#twitter" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#instagram" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
