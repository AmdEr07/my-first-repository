import { useContext } from 'react'; // Conectamos al contexto global
import { ThemeContext } from '../context/ThemeContext'; // Importamos la señal de la radio

function ThemeButton() {
  // Extraemos el estado actual del tema y la función interruptor
  const { theme, toggleTheme } = useContext(ThemeContext); 

  return (
    // El botón alterna su diseño y su icono dependiendo del estado global
    <button 
      onClick={toggleTheme} 
      className={`btn-theme ${theme === 'light' ? 'btn-light' : 'btn-dark'}`}
    >
      {theme === 'light' ? '⚡ Cambiar a Ambiente Oscuro' : '💡 Cambiar a Ambiente Claro'} 
    </button>
  );
}

export default ThemeButton; // Exportamos el botón personalizado