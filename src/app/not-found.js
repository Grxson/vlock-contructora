'use client';
import React from "react";
import Link from 'next/link'
import './styles/Error404.css'
import { FaHardHat, FaHome } from "react-icons/fa";

export default function NotFound() {
    return (
        <div className="error-container">
            <FaHardHat className="error-icon" />
            <h1>404</h1>
            <h2>Página no encontrada</h2>
            <p>Parece que la página que buscas está en construcción o no existe.</p>
            <Link href="/" className="error-button">
                <FaHome className="home-icon" /> Volver al Inicio
            </Link>
        </div>
    );
};

