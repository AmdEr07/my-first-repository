import { Link, Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <h1>Comidas</h1>
      <nav>
        <Link to="pizza">Pizza</Link>
        <Link to="hamburguesa">Hamburguesa</Link>
        <Link to="sushi">Sushi</Link>
        <Link to="pasta">Pasta</Link>
        <Link to="paella">Paella</Link>
      </nav>

      <Outlet />
    </>
  )
}

export default App