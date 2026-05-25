import { useContext } from 'react'; // Traemos la función para conectar componentes al contexto global
import { ThemeContext } from '../context/ThemeContext'; // Importamos el canal del tema para poder leerlo

function Header() {
  // Conectamos al canal para saber si el tema actual es 'light' o 'dark'
  const { theme } = useContext(ThemeContext); 

  return (
    // Elegimos la clase del archivo CSS según el modo que esté activo
    <header className={theme === 'light' ? 'header-light' : 'header-dark'}>
      <h1>🌸 Mi Espacio 🌸</h1> {/* Título principal de la cabecera */}
    </header>
  );
}

export default Header; // Exportamos el componente para poder usarlo en App.jsx