import { createBrowserRouter } from "react-router-dom"
import App from './App.jsx'
import Card from "./pages/Card.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: ":slug", // Dejamos solo :slug para que coincida exactamente con el useParams de Card.jsx
        element: <Card />
      }
    ]
  }
])

export default router
