"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "../styles/Carousel.css";

const slides = [
    {
        image: "/assets/Carousel/slide1.png",
        text: "Soluciones constructivas a tu medida",
    },
    {
        image: "/assets/Carousel/slide2.png",
        text: "Calidad e innovación en cada proyecto",
    },
    {
        image: "/assets/Carousel/slide3.png",
        text: "Construyendo sueños, ladrillo a ladrillo",
    },
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Mover al siguiente slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    // Mover al slide anterior
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    // Cambiar de slide automáticamente cada 6 segundos
    useEffect(() => {
        const interval = setInterval(nextSlide, 6000);
        return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
    }, []);

    return (
        <div className="home-carousel">
            {/* Slider */}
            <div className="home-carousel-slide-container">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`home-carousel-slide ${index === currentIndex ? "active" : ""}`}
                    >
                        <Image
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            fill
                            className="home-carousel-image"
                        />
                        <div className="home-carousel-overlay"></div>
                        <div className="home-carousel-caption">
                            {slide.text}
                        </div>
                    </div>
                ))}
            </div>

            {/* Botones de navegación */}
            <button className="home-prev" onClick={prevSlide}>
                &#10094;
            </button>
            <button className="home-next" onClick={nextSlide}>
                &#10095;
            </button>

            {/* Indicadores de punto */}
            <div className="home-carousel-dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`home-dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}
