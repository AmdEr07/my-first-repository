import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Archivo global de estilos CSS
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx' // Importa nuestra configuración de rutas

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Arranco la aplicación pasándole mi configuración de rutas */}
    <RouterProvider router={router} />
  </StrictMode>,
)