import { Link, Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <h1>Comidas</h1>
      
      {/* Menú superior con los enlaces para cambiar de plato */}
      <nav>
        <Link to="pizza">Pizza</Link>
        <Link to="hamburguesa">Hamburguesa</Link>
        <Link to="sushi">Sushi</Link>
        <Link to="pasta">Pasta</Link>
        <Link to="paella">Paella</Link>
      </nav>
      
      {/* Aquí abajo es donde React cargará la tarjeta de la comida que elijamos */}
      <Outlet />
    </>
  )
}

export default App