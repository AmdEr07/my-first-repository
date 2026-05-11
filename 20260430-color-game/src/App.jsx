import { useState } from "react"
// importamos useState para guardar y actualizar el color del fondo

import Button from "./components/Button"
// importamos el componente hijo Button

import buttonsList from "./data/buttonsList"
// importamos el array con la informacion de los botones

function App() {

  // bgColor guarda el color actual del fondo
  // setBgColor sirve para cambiar ese color
  // el color inicial sera blanco

  const [bgColor, setBgColor] = useState("#ffffff")

  // funcion callback
  // el hijo la ejecuta cuando hacemos click en un boton

  function onBtnClick(colorHex) {

    // colorHex recibe el color enviado desde Button.jsx
    // por ejemplo: "#ff0000"

    console.log("[App.jsx] Button clicked: ", colorHex)

    // actualizamos el estado con el nuevo color
    // cuando cambia el estado, React vuelve a renderizar
    // y el fondo cambia automaticamente

    setBgColor(colorHex)
  }

  return (

    // contenedor principal
    // aplicamos el color dinamicamente usando bgColor

    <div
      className="container"
      style={{ backgroundColor: bgColor }}
    >

      {
        // recorremos el array buttonsList
        // y creamos un Button por cada elemento

        buttonsList.map((el, idx) => {

          return (

            <Button

              // key para identificar cada componente
              key={idx}

              // enviamos al hijo la informacion del boton
              // title y color

              btnData={el}

              // enviamos la funcion callback al hijo
              // el hijo podra ejecutarla al hacer click

              onBtnClickCallback={onBtnClick}

            />
          )
        })
      }

    </div>
  )
}

export default App

