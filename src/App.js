import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Formulario from "./Formulario/formulario"; // Asegúrate de que esta ruta sea correcta
import Feed from "./feed/feed"; // Asegúrate de que esta ruta sea correcta
import Header from "./header/header"; // Asegúrate de que esta ruta sea correcta
import Login from "./login/login"; // Asegúrate de que esta ruta sea correcta

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para manejar si el usuario está autenticado

  const handleLogin = () => {
    setIsAuthenticated(true); // Cambia el estado de autenticación a true después de iniciar sesión
  };

  return (
    <Router>
      {/* Si el usuario está autenticado, mostramos la barra de navegación (Header) */}
      {isAuthenticated && <Header />}

      <Routes>
        {/* Mostrar la pantalla de login solo si no está autenticado */}
        {!isAuthenticated ? (
          <Route path="/" element={<Login onLogin={handleLogin} />} />
        ) : (
          // Rutas accesibles solo después de iniciar sesión
          <>
            <Route path="/feed" element={<Feed />} /> {/* Ruta para la página principal */}
            <Route path="/formulario" element={<Formulario />} /> {/* Ruta para el formulario */}
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;

