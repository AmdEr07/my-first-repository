import Button from "./components/botonColor"
import buttonsList from "./data/buttonListPastel"
import { useState } from "react"

function App() {

  // Creamos un estado para guardar el color seleccionado
  const [color, setColor] = useState("color")

  // Creamos una función callback
  // El componente hijo la llamará cuando hagamos click
  function onBtnClick(colorHex) {

    // Mostramos en consola el color clicado
    console.log("[App.jsx] Button clicked: ", colorHex)

    // Actualizamos el estado
    setColor(colorHex)
  }

  return (

    // Contenedor principal
    <div className="container" style={{backgroundColor: color}}>

      {/* Recorremos el array buttonsList */}
      {buttonsList.map((el, idx) => {

        return (

          // Renderizamos un componente Button
          <Button
            key={idx}

            // Pasamos los datos del botón
            btnData={el}

            // Pasamos el callback al hijo
            onBtnClickCallback={onBtnClick}
          />

        )

      })}

      {/* Mostramos el hexadecimal */}
      <p className="hex-text">{color}</p>

    </div>
  )
}

export default App