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

        {/* Rutas */}
        <Routes>
          <Route path="/*" element={<App />} />
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