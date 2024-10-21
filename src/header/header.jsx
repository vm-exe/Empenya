import React from "react";
import { Link } from "react-router-dom"; // Importa el componente Link de react-router-dom
import "./header.css";  // Si tienes estilos separados para el header

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        Empe<span className="highlightHeader">nya</span>
      </div>
      <nav className="nav-menu">
        {/* Cambia href por Link to */}
        <Link to="/feed">Productos</Link>
        <Link to="/formulario">Empeños</Link>
        <Link to="/formulario">Mi Cuenta</Link> {/* Asegúrate de tener esta ruta configurada en App.js */}
      </nav>
    </header>
  );
};

export default Header;
