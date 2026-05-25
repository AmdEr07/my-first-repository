import Header from './components/Header'; // Importamos el componente de la cabecera
import MainContent from './components/MainContent'; // Importamos el componente del contenido
import ThemeButton from './components/ThemeButton'; // Importamos el componente del botón

function App() {
  return (
    <> {/* Fragmento para agrupar elementos sin meter divs innecesarios */}
      <Header /> {/* Montamos la cabecera (ella sola buscará su estilo) */}
      <MainContent /> {/* Montamos el contenido principal */}
      <div style={{ padding: '20px', textAlign: 'center' }}> {/* Contenedor centrado para el botón */}
        <ThemeButton /> {/* Montamos el botón que cambia el tema */}
      </div>
    </>
  );
}

export default App; // Exportamos App para que lo use main.jsx