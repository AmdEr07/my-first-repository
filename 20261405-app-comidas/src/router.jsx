import { createBrowserRouter } from "react-router-dom"

import App from './App.jsx'
import Card from "./pages/Card.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: ":comidasId",
                element: <Card />
            }
            {
                path: ':slug',
                element: <Card />
            }

            
        ]
    }   
])

export default router