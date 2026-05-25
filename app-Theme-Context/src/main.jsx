import { StrictMode } from 'react' // Modo estricto de React para desarrollo
import { createRoot } from 'react-dom/client' // Herramienta para renderizar la app en el HTML
import App from './App.jsx' // Importamos el componente padre App
import { ThemeProvider } from './context/ThemeProvider' // Importamos el emisor del tema global
import './index.css' // Estilos globales de la aplicación

createRoot(document.getElementById('root')).render( // Enganchamos React al div 'root' del HTML
  <StrictMode>
    <ThemeProvider> {/* Envolvemos toda la app con el emisor del tema */}
      <App /> {/* Nuestra aplicación ahora tiene superpoderes para leer el contexto */}
    </ThemeProvider>
  </StrictMode>,
)