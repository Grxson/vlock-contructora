'use client';
import Image from "next/image";
import '../styles/Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonios = [
    {
        nombre: "Juan Pérez",
        texto: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque rerum dignissimos eum nisi veritatis ut, aspernatur minus harum amet, alias sint. Pariatur aliquam nesciunt laborum itaque officia accusantium, eius quo?",
        imagen: "/assets/testimonials/testimonial1.jpg"
    },
    {
        nombre: "María Gómez",
        texto: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque rerum dignissimos eum nisi veritatis ut, aspernatur minus harum amet, alias sint. Pariatur aliquam nesciunt laborum itaque officia accusantium, eius quo?",
        imagen: "/assets/testimonials/testimonial1.jpg"
    },
    {
        nombre: "Luis Hernández",
        texto: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque rerum dignissimos eum nisi veritatis ut, aspernatur minus harum amet, alias sint. Pariatur aliquam nesciunt laborum itaque officia accusantium, eius quo?",
        imagen: "/assets/testimonials/testimonial1.jpg"
    },
    {
        nombre: "Ana Rodríguez",
        texto: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque rerum dignissimos eum nisi veritatis ut, aspernatur minus harum amet, alias sint. Pariatur aliquam nesciunt laborum itaque officia accusantium, eius quo?",
        imagen: "/assets/testimonials/testimonial1.jpg"
    },
    {
        nombre: "Carlos López",
        texto: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque rerum dignissimos eum nisi veritatis ut, aspernatur minus harum amet, alias sint. Pariatur aliquam nesciunt laborum itaque officia accusantium, eius quo?",
        imagen: "/assets/testimonials/testimonial1.jpg"
    }
];

export default function Testimonials() {
    return (
        <section className="testimonios-carrusel">
            <div className="testimonio-slide">
                <div className="testimonio-imagen">
                    <Image
                        src="/assets/testimonials/testimonial1.jpg"
                        alt="Foto testimonial"
                        width={200}
                        height={250}
                        className="imagen-cuadrada"
                    />
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    loop
                >
                    {testimonios.map((t, index) => (
                        <SwiperSlide key={index}>
                            <div className="testimonio-contenido">
                                <span className="etiqueta">TESTIMONIO</span>
                                <h3>¡Lo que opinan las personas!</h3>
                                <p style={{ color: 'black' }}>- {t.nombre}</p>
                                <p>{t.texto}</p>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>

    );
}