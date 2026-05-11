// CREAMOS un componente reutilizable
// Recibe PROPS (datos)
// Las props son:
// - userName
// - name
// - isFollowing

export function TwitterFollowCard({

  // Extraemos las props
  userName,
  name,
  isFollowing

}) {

  // OPERADOR TERNARIO
  // Si isFollowing es true -> "Siguiendo"
  // Si isFollowing es false -> "Seguir"

  const text = isFollowing
    ? 'Siguiendo'
    : 'Seguir'


  // Creamos clases dinámicas
  // Si seguimos al usuario:
  // "tw-followCard-button is-following"
  //
  // Si NO lo seguimos:
  // "tw-followCard-button"

  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'


  // Lo que se renderiza en pantalla
  return (

    // TARJETA COMPLETA
    <article className='tw-followCard'>

      {/* CABECERA */}
      <header className='tw-followCard-header'>

        {/* 
          AVATAR
            
          src = URL de la imagen
          
          `${userName}` inserta dinámicamente
          el nombre del usuario
          
          Ejemplo:
          https://unavatar.io/elonmusk
        */}

        <img
  className='tw-followCard-avatar'
  alt={`El avatar de ${userName}`}
  src={`https://github.com/${userName}.png`}
/>
        


        {/* CONTENEDOR del nombre y usuario */}
        <div className='tw-followCard-info'>

          {/* Nombre real */}
          <strong>{name}</strong>

          {/* Usuario */}
          <span className='tw-followCard-infoUserName'>
            @{userName}
          </span>

        </div>

      </header>


      {/* ZONA DERECHA */}
      <aside>

        {/* BOTÓN */}
        <button className={buttonClassName}>

          {/* Texto dinámico */}
          {text}

        </button>

      </aside>

    </article>
  )
}