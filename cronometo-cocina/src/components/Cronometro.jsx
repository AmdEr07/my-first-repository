// src/components/Cronometro.jsx
import { useState, useEffect } from 'react'

function Cronometro() {
  // 1. ESTADOS DE COMPONENTE (useState)
  // 'segundos' guarda el número actual del contador (empieza en 0)
  const [segundos, setSegundos] = useState(0)
  
  // 'activo' es un interruptor: true significa que el reloj corre, false que está parado
  const [activo, setActivo] = useState(false)

  // 2. EL MOTOR DEL RELOJ AUTOMÁTICO (useEffect)
  useEffect(() => {
    let intervalo = null

    if (activo) {
      intervalo = setInterval(() => {
        setSegundos((segundosAnteriores) => segundosAnteriores + 1)
      }, 1000) // 1000 milisegundos = 1 segundo
    } else {
      clearInterval(intervalo)
    }

    // FUNCIÓN DE LIMPIEZA (Cleanup)
    return () => clearInterval(intervalo)
  }, [activo]) // Se activa cuando pulsamos los botones

  // 3. FUNCIONES DE LOS BOTONES
  const empezarCronometro = () => {
    setActivo(true)
  }

  const pararCronometro = () => {
    setActivo(false)
  }

  const reiniciarCronometro = () => {
    setActivo(false) // Primero lo paramos
    setSegundos(0)   // Reseteamos el contador a 0
  }

  // 4. LO QUE VE EL USUARIO EN LA PANTALLA (HTML con clases de CSS)
  return (
    <div className="cronometro-contenedor">
      <h2>Cronómetro de Cocina</h2>
      
      <h3>Han pasado <span className="segundos-numero">{segundos}</span> segundos</h3>

      <div className="cronometro-botones">
        <button onClick={empezarCronometro} className="btn-cronometro btn-empezar">
          Empezar
        </button>
        <button onClick={pararCronometro} className="btn-cronometro btn-parar">
          Parar
        </button>
        <button onClick={reiniciarCronometro} className="btn-cronometro btn-reiniciar">
          Reiniciar
        </button>
      </div>
    </div>
  )
}

export default Cronometro