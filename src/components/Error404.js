import React from "react";
import { Link } from "react-router-dom";
import "./Error404.css";
import { FaHardHat, FaHome } from "react-icons/fa";

const Error404 = () => {
  return (
    <div className="error-container">
      <FaHardHat className="error-icon" />
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>Parece que la página que buscas está en construcción o no existe.</p>
      <Link to="https://www.facebook.com/photo.php?fbid=1152399109382846&set=pb.100038383037007.-2207520000&type=3" className="error-button">
        <FaHome className="home-icon" /> Volver al Inicio
      </Link>
    </div>
  );
};

export default Error404;
