import { useParams } from 'react-router-dom'
import comidas from "../data/comidas.js"

function Card() {
  // Obtenemos el parámetro 'slug' de la URL
  const { slug } = useParams()

  // Busca dentro del array 'comidas' el primer elemento cuyo 'slug' coincida con el de la URL.
  // La función find recorre el array y devuelve ese elemento; si no existe, devuelve undefined.
  // Recibe un callback que se ejecuta para cada plato, y devuelve true para el plato que queremos encontrar.

  // Buscamos la comida que coincida con ese slug
  const comidaEncontrada = comidas.find((comida) => comida.slug === slug)

  // Validación de seguridad: si no existe la comida, mostramos un error
  if (!comidaEncontrada) {
    return <h2>404 - Comida no encontrada</h2>
  }

  return (
    <>
      <h2>{comidaEncontrada.title}</h2>
      <p>{comidaEncontrada.info}</p>
      <img 
        src={comidaEncontrada.photo} 
        alt={comidaEncontrada.title} 
        style={{ width: '300px' }} // Opcional: para que no se vea gigante
      />
    </>
  )
}

export default Card