/* importamos Link para navegar */
import { Link, Outlet } from "react-router-dom"

function App() {
  return (
    <>
      {/* Menú que estará visible en todas las páginas */}
      <nav className="main-nav"> {/* Añadimos esta clase */}
        <Link to="/">Inicio</Link>
        <Link to="/exposiciones">Exposiciones</Link>
        <Link to="/artistas">Artistas</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>

      {/* Outlet es el lugar donde se "pintarán" los hijos del router (Inicio, Artistas...) */}
      <Outlet />
    </>
  )
}

export default App