
import './index.css'
import Tarjeta from './components/Tarjeta.jsx'
import Avatar from './components/Avatar.jsx'

function App() {

  return (
    <>
    
      <h1>Hola, soy Amanda</h1>

       <Tarjeta src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsK7ox6ZUo_5spLsRJTAh2idvizo7QLqoJ-w&s" nombre= "Amanda" edad= {41}/>
       <Tarjeta src="https://e7.pngegg.com/pngimages/101/287/png-clipart-computer-icons-nanny-template-job-desktop-avatar-woman-template-child.png" nombre= "Esther" edad= {37}/>
       <Tarjeta src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPVO4LSlzzN3vjB0C4LiWsqRG-iYFpJEvDHQ&s" nombre= "Rossana" edad= {25}/>

       
       


    </>
  )
}

export default App
