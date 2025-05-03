'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import '../styles/Proyectos.css';

/* Notas:
*/

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      img: '/assets/Plaza Piramide.jpg',
      fullImg: '/assets/ProyectsImageFull/PlazaPiramide.jpg',
      caption: 'PLAZA PIRÁMIDE: DESARROLLO Y CONSTRUCCIÓN'
    },
    {
      img: '/assets/Torre Country.jpg',
      fullImg: '/assets/ProyectsImageFull/Torre Country.jpg',
      caption: 'TORRE DE DEPARTAMENTOS COUNTRY CLUB MUROS'
    },
    {
      img: '/assets/Aeropuerto.jpg',
      fullImg: '/assets/ProyectsImageFull/Aeropuerto.jpg',
      caption: 'AEROPUERTO DE GUADALAJARA: REMODELACIÓN DE SALAS DE ESPERA'
    },
    {
      img: '/assets/NextiPark.jpg',
      fullImg: '/assets/ProyectsImageFull/NextiPark.jpg',
      caption: 'PRELIMINARES NEXTIPARK'
    },
    {
      img: '/assets/Tequilera.jpg',
      fullImg: '/assets/ProyectsImageFull/Tequilera.jpg',
      caption: 'TEQUILERA DON JULIO'
    },
    {
      img: '/assets/Hersheys.jpg',
      fullImg: '/assets/ProyectsImageFull/Hersheys.jpg',
      caption: 'MUROS PERIMETRALES PARA HERSHEY´S'
    }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const moveSlide = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = 0;
    if (newIndex > totalPages - 1) newIndex = totalPages - 1;
    setCurrentIndex(newIndex);
  };

  const openImage = (img) => {
    setSelectedImage(img);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <h1>Nuestros Proyectos</h1>
      <div className="carousel-container">
        <button className="carousel-btn" onClick={() => moveSlide(-1)}>&lt;</button>
        <div className="carousel-wrapper">
          <div
            className="carousel"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="carousel-item"
                onClick={() => openImage(project.fullImg || project.img)}
              >
                <div className="carousel-item-inner">
                  <Image
                    src={project.img}
                    alt={`Proyecto ${index + 1}`}
                    width={400}
                    height={300}
                    style={{ objectFit: 'cover', borderRadius: '8px' }}
                  />

                  <div className="carousel-caption">{project.caption}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-btn" onClick={() => moveSlide(1)}>&gt;</button>
      </div>

      {selectedImage && (
        <div className="overlay" onClick={closeImage}>
          <div className="overlay-content">
            <Image
              src={selectedImage}
              alt="Imagen Ampliada"
              width={1000}
              height={700}
              style={{ objectFit: 'contain', borderRadius: '8px' }}
            />

          </div>
        </div>
      )}
    </div>
  );
}

export default App;
