import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para la redirección
import "./login.css";

const Login = ({ onLogin }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook de react-router-dom para redirigir

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica )
    if (user === "admin" && password === "123") {
      onLogin(); // Cambia el estado de autenticación en App.js
      navigate("/feed"); // Redirige a la pantalla principal ("/feed)
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="avatar"></div>
        <h1 className="logo">
          Empen<span className="highlight">ya</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="User"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="/" className="forgot-password">
            Forgot password?
          </a>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
