import { useState } from "react";

function App() {
  /*
    Creamos dos estados:
    - selectedRow → fila seleccionada
    - selectedCol → columna seleccionada

    Empezamos en 0,0 para que la primera
    celda (arriba izquierda) aparezca seleccionada.
  */
  const [selectedRow, setSelectedRow] = useState(0);
  const [selectedCol, setSelectedCol] = useState(0);

  /*
    Esta función mueve la selección
    dependiendo de la flecha pulsada.
  */
  const moveSelection = (direction) => {
    // Guardamos la posición actual
    let newRow = selectedRow;
    let newCol = selectedCol;

    /*
      Según la dirección,
      cambiamos fila o columna.
    */
    if (direction === "up") newRow--;
    if (direction === "down") newRow++;
    if (direction === "left") newCol--;
    if (direction === "right") newCol++;

    /*
      Comprobamos que el usuario
      NO salga del grid.

      Si intenta salir,
      mostramos un aviso.
    */
    if (newRow < 0 || newRow > 9 || newCol < 0 || newCol > 9) {
      alert("No puedes salir del grid");
      return;
    }

    /*
      Actualizamos la nueva posición
      seleccionada.
    */
    setSelectedRow(newRow);
    setSelectedCol(newCol);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d5f3f8",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          marginBottom: "20px",
          color: "#333",
        }}
      >
        Grid App
      </h1>

      {/* BOTONES DE DIRECCIÓN */}
      <div
        style={{
          marginBottom: "25px",
          display: "flex",
          gap: "10px",
        }}
      >
        <button
          onClick={() => moveSelection("left")}
          style={buttonStyle}
        >
          ←
        </button>

        <button
          onClick={() => moveSelection("up")}
          style={buttonStyle}
        >
          ↑
        </button>

        <button
          onClick={() => moveSelection("down")}
          style={buttonStyle}
        >
          ↓
        </button>

        <button
          onClick={() => moveSelection("right")}
          style={buttonStyle}
        >
          →
        </button>
      </div>

      {/* =========================
          GRID 10x10
         ========================= */}

      {/*
        Creamos un array de 10 posiciones.
        Cada posición será una fila.
      */}
      {[...Array(10)].map((_, rowIndex) => (
        /*
          Este div representa UNA FILA.
          display:flex hace que las celdas
          se coloquen una al lado de otra.
        */
        <div key={rowIndex} style={{ display: "flex" }}>
          {/*
            Dentro de cada fila,
            creamos otro array de 10 posiciones.
            Cada posición será una celda.
          */}
          {[...Array(10)].map((_, colIndex) => (
            /*
              Este div representa UNA CELDA.

              width  = ancho
              height = alto
              border = borde

              También comprobamos si esta celda
              es la seleccionada para cambiarle
              el color.
            */
            <div
              key={colIndex}
              /*
                Nivel avanzado:
                Si el usuario hace click
                en una celda, se selecciona.
              */
              onClick={() => {
                setSelectedRow(rowIndex);
                setSelectedCol(colIndex);
              }}
              style={{
                width: "45px",
                height: "45px",
                border: "1px solid #555",

                /*
                  Si la fila y columna coinciden
                  con la seleccionada,
                  pintamos la celda.
                */
                backgroundColor:
                  selectedRow === rowIndex &&
                  selectedCol === colIndex
                    ? "#ec56fa"
                    : "white",

                /*
                  Centramos contenido por si
                  queremos poner algo dentro.
                */
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                /*
                  Animación suave del color.
                */
                transition: "0.2s",

                cursor: "pointer",
              }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}

/*
  Estilo reutilizable para botones.
*/
const buttonStyle = {
  padding: "10px 15px",
  fontSize: "20px",
  border: "none",
  borderRadius: "8px",
  backgroundColor: "#333",
  color: "white",
  cursor: "pointer",
  transition: "0.2s",
};

export default App;