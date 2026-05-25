import { useContext } from 'react'; // Conectamos al contexto global para escuchar la señal
import { ThemeContext } from '../context/ThemeContext'; // Importamos la señal de la radio

function Header() {
  const { theme } = useContext(ThemeContext); // Sintonizamos si estamos en 'light' o 'dark'

  return (
    // Aplicamos la clase de CSS según el modo activo
    <header className={theme === 'light' ? 'header-light' : 'header-dark'}>
      <h1>🌸Mi Espacio🌸</h1> {/* Título enfocado en tu nueva profesión */}
    </header>
  );
}

export default Header; // Exportamos el componente limpio