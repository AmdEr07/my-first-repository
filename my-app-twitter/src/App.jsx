// IMPORTAMOS el componente TwitterFollowCard
// para poder usarlo dentro de App
import { TwitterFollowCard } from './components/TwitterFollowCard.jsx'

// COMPONENTE PRINCIPAL de la aplicación
export function App() {

  // RETURN = lo que se va a mostrar en pantalla
  return (

    // SECTION = contenedor principal
    <section className='App'>

      {/* 
        Aquí usamos el componente varias veces
        
        userName = usuario de Twitter
        name = nombre real
        isFollowing = si seguimos a la persona o no
      */}

      <TwitterFollowCard
        userName='midudev'
        name='Miguel Ángel Durán'
        isFollowing={true}
      />

      <TwitterFollowCard
        userName='pheralb'
        name='Pablo Hernandez'
        isFollowing={false}
      />

      <TwitterFollowCard
        userName='elonmusk'
        name='Elon Musk'
        isFollowing={false}
      />

      <TwitterFollowCard
        userName='vxnder'
        name='Vanderhart'
        isFollowing={true}
      />

    </section>
  )
}