// Importamos React y ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Importamos React Router
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Importamos estilos
import "./index.css";

// Importamos componentes
import App from "./App.jsx";
import RutaGoogleMaps from "./pages/RutaGoogleMaps.jsx";

// Importamos el Context
import { AlumnoProvider } from "./context/AlumnoContext";

// Componente principal
function Root() {
  return (
    <BrowserRouter>

      {/* Context Provider */}
      <AlumnoProvider>

        {/* Menú de navegación */}
        <nav style={{ padding: "15px", backgroundColor: "#f2f2f2" }}>
          <Link to="/" style={{ marginRight: "15px" }}>
            Inicio
          </Link>

          <Link to="/ruta-google-maps">
            Ruta Google Maps
          </Link>
        </nav>

        {/* Rutas */}
        <Routes>
          <Route path="/*" element={<App />} />
          <Route path="/ruta-google-maps" element={<RutaGoogleMaps />} />
        </Routes>

      </AlumnoProvider>

    </BrowserRouter>
  );
}

// Render principal
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);