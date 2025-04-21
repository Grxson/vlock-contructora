import React from 'react';
import '../styles/WhatsappButton.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function WhatsappButton() {
  // Reemplaza el número de teléfono con tu número (sin símbolos ni espacios)
  const whatsappNumber = '523326277757';
  const whatsappURL = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat de WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}

export default WhatsappButton;
