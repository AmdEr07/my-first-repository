import { useParams } from 'react-router-dom'
import comidas from "../data/comidas.js"

function Card() {
  // Saco el nombre del plato de la barra de direcciones del navegador
  const { slug } = useParams()

  // Buscamos en el array el plato cuyo slug coincida con el de la navegación.
  // .find() recorre el archivo de datos y extrae el primer objeto que cumpla la condición.
  const comidaEncontrada = comidas.find((comida) => comida.slug === slug)

  // Si alguien escribe una comida que no existe en la web, devuelvo este error
  if (!comidaEncontrada) {
    return <h2>404 - Comida no encontrada</h2>
  }

  return (
    <>
      {/* Pinto en la pantalla los textos y la imagen local de la comida */}
      <h2>{comidaEncontrada.title}</h2>
      <p>{comidaEncontrada.info}</p>
      <img 
        src={comidaEncontrada.photo} 
        alt={comidaEncontrada.title} 
        style={{ width: '300px' }} // Control de tamaño para que no se descuadre la foto
      />
    </>
  )
}

export default Card