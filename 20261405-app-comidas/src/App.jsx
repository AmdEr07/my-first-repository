import { Link, Outlet } from "react-router-dom"

function App() {
  
  return (
    <>
      <h1>Comidas</h1>
      <nav>
        <Link to="1">Pizza</Link>
        <Link to="2">Hamburguesa</Link>
        <Link to="3">Sushi</Link>
        <Link to="4">Pasta</Link>
        <Link to="5">Paella</Link>
      </nav>

      <Outlet />
    </>
  )
}

export default App
