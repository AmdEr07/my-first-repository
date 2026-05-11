function Button({ btnData, onBtnClickCallback }) {

  // funcion interna del componente hijo
  // se ejecuta cuando hacemos click

  function onBtnClick(colorHex) {

    // llamamos a la funcion callback del padre
    // y le enviamos el color del boton pulsado

    onBtnClickCallback(colorHex)
  }

  return (

    <div
      className="button"

      // detectamos el click
      // enviamos el color del boton actual

      onClick={() => {
        onBtnClick(btnData.color)
      }}
    >

      {/* mostramos el titulo del boton */}
      {btnData.title}

    </div>
  )
}

export default Button