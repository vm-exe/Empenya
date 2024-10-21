import React, { useState } from "react";
import "./formulario.css";

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    dpi: "",
    imagen: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h1 className="form-title">Formulario</h1>
        <h2 className="form-subtitle">de Empeño</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />

            <label htmlFor="dpi">DPI</label>
            <input
              type="text"
              id="dpi"
              name="dpi"
              value={formData.dpi}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="imagen">Imagen</label>
            <input
              type="text"
              id="imagen"
              name="imagen"
              value={formData.imagen}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="descripcion">Descripción del Producto</label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
