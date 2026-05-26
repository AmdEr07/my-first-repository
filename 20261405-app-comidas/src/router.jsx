import { createBrowserRouter } from "react-router-dom"
import App from './App.jsx'
import Card from "./pages/Card.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Componente padre que contiene el menú <nav> y el <Outlet />
    children: [
      {
        // Ruta dinámica variable (:slug) que coincide con el useParams de Card.jsx
        path: ":slug", 
        element: <Card />
      }
    ]
  }
])

export default router