import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Inicio from "./pages/Inicio.jsx"
import Exposiciones from "./pages/Exposiciones.jsx"
import Artistas from "./pages/Artistas.jsx"
import Contacto from "./pages/Contacto.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App actúa como el diseño (layout) principal
    children: [
      {
        index: true, // Indica que es la página de inicio por defecto
        element: <Inicio />,
      },
      {
        path: "exposiciones", // URL: /exposiciones
        element: <Exposiciones />,
      },
      {
        path: "artistas", // URL: /artistas
        element: <Artistas />,
      },
      {
        path: "contacto", // URL: /contacto
        element: <Contacto />,
      },
    ],
  },
])

export default router