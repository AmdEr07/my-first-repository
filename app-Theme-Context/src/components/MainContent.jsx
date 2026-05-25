import { useContext } from 'react'; // Conectamos al contexto global
import { ThemeContext } from '../context/ThemeContext'; // Importamos la señal de la radio

function MainContent() {
  const { theme } = useContext(ThemeContext); // Leemos el tema activo en este milisegundo

  return (
    // Cambiamos el contenedor usando solo la clase del CSS
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

export default MainContent; // Exportamos el componente con tus textos nuevos