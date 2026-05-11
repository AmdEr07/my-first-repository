import "./PhotoModal.css"

function PhotoModal({imgObj, closeModalCallback}) {

  return (

    /* fondo oscuro del modal */

    <div className="overlay">

      /* imagen seleccionada */

      <img src={imgObj.src} alt="" />

      {/* botón para cerrar modal */}
              /* al hacer click ejecutamos callback */+
      <button className="close-btn" onClick={() => {
        /* cerramos modal */
         closeModalCallback()
       }}
      >
        X
      </button>

    </div>
  )

}

export default PhotoModal