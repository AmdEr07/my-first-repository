// src/App.jsx

// Este archivo es el centro de la aplicación.
// Aquí se organizan las rutas, es decir, las “páginas” de nuestra web.

// Importamos BrowserRouter, Routes y Route para poder tener varias páginas en React.
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importamos useState para guardar si el administrador está conectado o no.
import { useState } from "react";

// Importamos las páginas principales del proyecto.
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import PostDetail from "./pages/PostDetail";
import Favoritos from "./pages/Favoritos";
import NotFound from "./pages/NotFound";
import AcercaDe from "./pages/AcercaDe";
import Footer from "./components/Footer";

export default function App() {
  // Creamos un estado llamado usuarioConectado.
  // Sirve para saber si el usuario ha iniciado sesión como administrador.
  // Si en localStorage ya existe una api_key, significa que ya se había conectado antes.
  const [usuarioConectado, setUsuarioConectado] = useState(
    localStorage.getItem("api_key") ? true : false
  );

  return (
    // BrowserRouter envuelve toda la aplicación para activar la navegación.
    <BrowserRouter>
      {/* Routes contiene todas las rutas de la web */}
      <Routes>
        {/* Ruta principal: muestra la portada del blog */}
        <Route
          path="/"
          element={<Home usuarioConectado={usuarioConectado} setUsuarioConectado={setUsuarioConectado} />}
        />

        {/* Ruta independiente para cada categoría */}
        <Route
          path="/categoria/:categoriaUrl"
          element={<Home usuarioConectado={usuarioConectado} setUsuarioConectado={setUsuarioConectado} />}
        />

        {/* Ruta para leer un artículo individual */}
        <Route
          path="/post/:id"
          element={<PostDetail />}
        />

        {/* Ruta para la página personal "Sobre mí" */}
        <Route
          path="/sobre-mi"
          element={<AcercaDe usuarioConectado={usuarioConectado} setUsuarioConectado={setUsuarioConectado} />}
        />

        {/* Ruta para la página personal "Acerca de" */}
        <Route
          path="/acerca-de"
          element={<AcercaDe usuarioConectado={usuarioConectado} setUsuarioConectado={setUsuarioConectado} />}
        />

        {/* Ruta para ver los artículos guardados como favoritos */}
        <Route
          path="/favoritos"
          element={<Favoritos usuarioConectado={usuarioConectado} setUsuarioConectado={setUsuarioConectado} />}
        />

        {/* Ruta del login del administrador */}
        <Route
          path="/login"
          element={<Login setUsuarioConectado={setUsuarioConectado} />}
        />

        {/* Ruta del panel de administración */}
        <Route
          path="/admin"
          element={<Admin usuarioConectado={usuarioConectado} />}
        />

        {/* Ruta comodín: se muestra si el usuario escribe una URL que no existe */}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

      {/* Footer se coloca fuera de Routes para que aparezca al final de todas las páginas */}
      <Footer />
    </BrowserRouter>
    
  );
}
