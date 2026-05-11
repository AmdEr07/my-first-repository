// IMPORTAMOS useState
import { useState } from "react"

// IMPORTAMOS Tarjeta
import Tarjeta from "./components/Tarjeta"

// IMPORTAMOS personajes
import { personajes } from "./data/personajes"

function App() {

  // Estado para guardar el personaje seleccionado
  const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null)

  return (

    // CONTENEDOR PRINCIPAL
    <div className="container">

      {/* TÍTULO */}
      <h1>Selector de personajes 🎮</h1>

      {/* BOTONES */}
      <div className="botones">

        {/*
          .map() recorre el array personajes

          Por cada personaje:
          React crea un botón
        */}

        {personajes.map((personaje) => {

          return (

            <button

              // key = identificador único
              key={personaje.id}

              // Al hacer click:
              // guardamos el personaje
              onClick={() => {
                setPersonajeSeleccionado(personaje)
              }}
            >

              {/* Emoji + nombre */}
              {personaje.emoji} {personaje.nombre}

            </button>

          )

        })}

      </div>

      {/* TARJETA */}

      {/*
        ...personajeSeleccionado

        Spread operator

        Envía automáticamente:
        nombre
        emoji
        arma
        ataque
        energia
      */}

      {
        personajeSeleccionado

          ? <Tarjeta {...personajeSeleccionado} />

          : <Tarjeta />
      }

    </div>
  )
}

export default App