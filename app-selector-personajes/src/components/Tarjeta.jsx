// COMPONENTE TARJETA

function Tarjeta({
  nombre,
  emoji,
  arma,
  ataque,
  energia
}) {

  // Si NO hay personaje seleccionado
  if (!nombre) {

    return (

      <div className="tarjeta">

        <h2>Selecciona un personaje</h2>

      </div>

    )

  }

  // Si SÍ hay personaje
  return (

    <div className="tarjeta">

      <h1>{emoji}</h1>

      <h2>{nombre}</h2>

      <p>
        <strong>Arma:</strong> {arma}
      </p>

      <p>
        <strong>Ataque:</strong> {ataque}
      </p>

      <p>
        <strong>Energía:</strong> {energia}
      </p>

    </div>

  )
}

export default Tarjeta