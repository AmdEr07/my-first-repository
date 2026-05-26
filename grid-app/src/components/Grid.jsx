function Grid({
  selectedRow,
  selectedCol,
  setSelectedRow,
  setSelectedCol,
}) {
  return (
    <section className="grid">
      {/*
        Creamos un array de 10 posiciones.
        Cada posición será una FILA.
      */}

      {[...Array(10)].map((_, rowIndex) => (
        /*
          Este div representa UNA FILA.
          display:flex hace que las celdas
          se coloquen una al lado de otra.
        */

        <div className="row" key={rowIndex}>
          {/*
            Dentro de cada fila,
            creamos otro array de 10 posiciones.

            Cada posición será una celda.
          */}

          {[...Array(10)].map((_, colIndex) => (
            /*
              Este botón representa UNA CELDA.
            */

            <button
              key={colIndex}

              /*
                Nivel avanzado:

                Si el usuario hace click
                en una celda,
                esa celda se selecciona.
              */

              onClick={() => {
                setSelectedRow(rowIndex);
                setSelectedCol(colIndex);
              }}

              /*
                Si la fila coincide
                Y la columna coincide,
                añadimos la clase selected.
              */

              className={
                selectedRow === rowIndex &&
                selectedCol === colIndex
                  ? "cell selected"
                  : "cell"
              }
            ></button>
          ))}
        </div>
      ))}
    </section>
  );
}

export default Grid;