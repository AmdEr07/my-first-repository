import { useState } from 'react'; // Traemos la función para usar estados de React
import { ThemeContext } from './ThemeContext'; // Importamos el canal que creamos al lado

export const ThemeProvider = ({ children }) => { // Componente que envuelve a los demás para pasarles los datos
  const [theme, setTheme] = useState('light'); // Variable de estado para el tema, por defecto empieza en claro

  const toggleTheme = () => { // Función para cambiar el tema como un interruptor
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')); // Si está en claro pasa a oscuro, si no, a claro
  };

  return (
    // Compartimos la variable del tema y la función del interruptor con los componentes de dentro
    <ThemeContext.Provider value={{ theme, toggleTheme }}> 
      {children} {/* Aquí se pintan los componentes hijos que reciben la información */}
    </ThemeContext.Provider>
  );
};