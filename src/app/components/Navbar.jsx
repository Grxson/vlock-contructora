"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import logoVlock from "../assets/logo-vlock.png";
import "../styles/Navbar.css";

export default function Navbar() {
    useEffect(() => {
        const links = document.querySelectorAll(".nav-links a");

        links.forEach(link => {
            link.addEventListener("click", function () {
                links.forEach(l => l.classList.remove("active"));
                this.classList.add("active");
            });
        });

        // Limpiar listeners al desmontar
        return () => {
            links.forEach(link => {
                link.removeEventListener("click", () => {});
            });
        };
    }, []);

    const toggleMenu = () => {
        const navLinks = document.querySelector(".nav-links");
        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            document.addEventListener("click", closeMenuOutside);
        } else {
            document.removeEventListener("click", closeMenuOutside);
        }
    };

    const closeMenuOutside = (event) => {
        const navLinks = document.querySelector(".nav-links");
        const hamburger = document.querySelector(".hamburger");

        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            navLinks.classList.remove("active");
            document.removeEventListener("click", closeMenuOutside);
        }
    };

    return (
        <header>
            <div className="top-bar">
                <div className="contact-info">
                    <span><i className="fa-solid fa-phone"></i> +52 1 55 7366 4910</span> |
                    <span><i className="fa-solid fa-envelope"></i>administrador@servicioswebicono.com</span>
                </div>
                <div className="social-icons">
                    <a href="#" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>

            <nav className="navbar">
                <div className="logo-container">
                    <Link href="/">
                        <Image src={logoVlock} alt="Logo" className="logo" priority />
                    </Link>
                </div>
                <ul className="nav-links">
                    <li><Link href="/" className="active">Inicio</Link></li>
                    <li><Link href="/servicios">Servicios</Link></li>
                    <li><Link href="/proyectos">Proyectos</Link></li>
                    <li><Link href="/contacto">Contáctanos</Link></li>
                </ul>
                <div className="hamburger" onClick={toggleMenu}>
                    <i className="fa fa-bars"></i>
                </div>
            </nav>
        </header>
    );
}
