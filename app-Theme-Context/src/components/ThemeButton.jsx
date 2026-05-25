import { useContext } from 'react'; // Traemos la función para conectar componentes al contexto global
import { ThemeContext } from '../context/ThemeContext'; // Importamos el canal del tema para poder leerlo

function ThemeButton() {
  // Sacamos el tema actual y la función del interruptor desde nuestro canal global
  const { theme, toggleTheme } = useContext(ThemeContext); 

  return (
    // Al hacer clic ejecutamos el interruptor y cambiamos el diseño usando las clases de index.css
    <button 
      onClick={toggleTheme} 
      className={`btn-theme ${theme === 'light' ? 'btn-light' : 'btn-dark'}`}
    >
      {theme === 'light' ? '⚡ Cambiar a Ambiente Oscuro' : '💡 Cambiar a Ambiente Claro'} 
    </button>
  );
}

export default ThemeButton; // Exportamos el botón para colocarlo en App.jsx