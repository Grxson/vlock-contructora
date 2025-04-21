'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import '../styles/Proyectos.css';

/* Notas: Falta Corregir:

20/04/2025

Titulo: Mover al lado izquierdo siendo fiel al UI Design de la constructora.
Carrusel: Corregir funcionalidad del carrusel e agregar mas imagenes, implementacion del despligue de imagen al click de un proyecto.
*/

function Proyectos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = [
    { img: '/assets/Plaza Piramide.jpg', caption: 'PLAZA PIRÁMIDE: DESARROLLO Y CONSTRUCCIÓN' },
    { img: '/assets/Torre Country.jpg', caption: 'TORRE DE DEPARTAMENTOS COUNTRY CLUB MUROS' },
    { img: '/assets/Aeropuerto.jpg', caption: 'AEROPUERTO DE GUADALAJARA: REMODELACIÓN DE SALAS DE ESPERA' }
  ];

  const moveSlide = (direction) => {
    const newIndex = (currentIndex + direction + projects.length) % projects.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="App">
      <h1>Nuestros Proyectos</h1>
      <div className="carousel-container">
        <button className="carousel-btn" onClick={() => moveSlide(-1)}>&lt;</button>
        <div className="carousel">
          {projects.map((project, index) => (
            <div
              key={index}
              className="carousel-item"
              style={{ transform: `translateX(${-100 * currentIndex}%)` }}
            >
              <div className="carousel-item-inner">
                <Image src={project.img} alt={`Proyecto ${index + 1}`} width={400}
                  height={300} />
                <div className="carousel-caption">{project.caption}</div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-btn" onClick={() => moveSlide(1)}>&gt;</button>
      </div>
    </div>
  );
}

export default Proyectos;
