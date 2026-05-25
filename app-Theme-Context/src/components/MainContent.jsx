import { useContext } from 'react'; // Traemos la función para conectar componentes al contexto global
import { ThemeContext } from '../context/ThemeContext'; // Importamos el canal del tema para poder leerlo

function MainContent() {
  // Leemos el tema activo en este momento ('light' o 'dark')
  const { theme } = useContext(ThemeContext); 

  return (
    // Aplicamos los colores de fondo y texto del archivo index.css según el tema
    <main className={theme === 'light' ? 'content-light' : 'content-dark'}>
      <h2>¡Hola! Soy Programadora Web 🖥️</h2>
      <p>
        Bienvenido a mi rincón de desarrollo. Actualmente estoy en la recta final de mi formación, 
        preparando mi proyecto final y lista para afrontar nuevos retos tecnológicos creando aplicaciones 
        eficientes, limpias y escalables.
      </p>
      <p style={{ marginTop: '15px', fontStyle: 'italic' }}>
        "El código es como el humor: cuando tienes que explicarlo, es malo."
      </p>
      <span style={{ display: 'block', marginTop: '25px', fontSize: '0.85rem' }}>
        Vista de entorno: <strong>{theme === 'light' ? 'DÍA ☀️' : 'NOCHE 🌙'}</strong>
      </span>
    </main>
  );
}

export default MainContent; // Exportamos el contenido principal para usarlo en App.jsx