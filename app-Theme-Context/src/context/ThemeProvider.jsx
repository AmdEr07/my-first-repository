import { useState } from 'react'; // Traemos el gancho para usar estados
import { ThemeContext } from './ThemeContext'; // Importamos la señal que creamos al lado

export const ThemeProvider = ({ children }) => { // children son todos los componentes que irán dentro
  const [theme, setTheme] = useState('light'); // Creamos el estado global del tema (empieza en claro)

  const toggleTheme = () => { // Función para alternar el interruptor del tema
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')); // Si es light pasa a dark, y si no a light
  };

  return (
    // Emitimos el valor actual (theme) y la función (toggleTheme) a través de la señal
    <ThemeContext.Provider value={{ theme, toggleTheme }}> 
      {children} {/* Aquí dentro se pintarán App, Header, etc., recibiendo la señal */}
    </ThemeContext.Provider>
  );
};