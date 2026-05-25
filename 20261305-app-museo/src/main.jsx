import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css" // Estilos globales
import { RouterProvider } from "react-router-dom" // Proveedor de rutas
import router from "./router.jsx" // Configuración de nuestras rutas

// Selecciona el div 'root' del HTML y renderiza la App
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Conectamos el sistema de rutas a la aplicación */}
    <RouterProvider router={router} />
  </StrictMode>
)