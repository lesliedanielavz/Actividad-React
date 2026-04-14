import { useState } from "react";
import "./../styles/Contacto.css";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado. Gracias por contactarme!");
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className="contact">
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Enviar Mensaje</button>
      </form>

      <div className="info">
        <p><strong>Email:</strong> lesliedaniela.vza@gmail.com</p>
        <p><strong>Teléfono:</strong> 6699415928</p>
        <p><strong>LinkedIn:</strong> linkedin.com/in/lesliedaniela</p>
      </div>
    </div>
  );
}

export default Contacto;