import { NavLink } from "react-router-dom";
import "./../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Bienvenido</div>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Inicio
        </NavLink>

        <NavLink to="/acerca" className={({ isActive }) => (isActive ? "active" : "")}>
          Acerca de mí
        </NavLink>

        <NavLink to="/contacto" className={({ isActive }) => (isActive ? "active" : "")}>
          Contacto
        </NavLink>

        <NavLink to="/tablas" className={({ isActive }) => (isActive ? "active" : "")}>
          Tablas
        </NavLink>

        {/* Nuevo enlace */}
        <NavLink to="/usuarios" className={({ isActive }) => (isActive ? "active" : "")}>
          Usuarios
        </NavLink>

      </nav>
    </div>
  );
}

export default Navbar;