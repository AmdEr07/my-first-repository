import { useState } from "react";

import Grid from "./components/Grid";
import Controls from "./components/Controls";

import "./index.css";

function App() {
  /*
    Estado de la fila seleccionada.
    Empieza en la fila 0.
  */

  const [selectedRow, setSelectedRow] = useState(0);

  /*
    Estado de la columna seleccionada.
    Empieza en la columna 0.
  */

  const [selectedCol, setSelectedCol] = useState(0);

  /*
    Función para mover
    la selección del grid.
  */

  const moveSelection = (direction) => {
    // Guardamos la posición actual

    let newRow = selectedRow;
    let newCol = selectedCol;

    /*
      Según la dirección,
      cambiamos fila o columna.
    */

    if (direction === "up") {
      newRow--;
    }

    if (direction === "down") {
      newRow++;
    }

    if (direction === "left") {
      newCol--;
    }

    if (direction === "right") {
      newCol++;
    }

    /*
      Comprobamos que el usuario
      NO salga fuera del grid.

      || significa "O"

      Si cualquiera de estas
      condiciones se cumple,
      se cancela el movimiento.
    */

    if (
      newRow < 0 ||
      newRow > 9 ||
      newCol < 0 ||
      newCol > 9
    ) {
      return;
    }

    // Actualizamos la posición

    setSelectedRow(newRow);
    setSelectedCol(newCol);
  };

  return (
    <main className="app">
      <h1>Grid App</h1>

      {/* COMPONENTE DE BOTONES */}

      <Controls moveSelection={moveSelection} />

      {/* COMPONENTE GRID */}

      <Grid
        selectedRow={selectedRow}
        selectedCol={selectedCol}
        setSelectedRow={setSelectedRow}
        setSelectedCol={setSelectedCol}
      />
    </main>
  );
}

export default App;