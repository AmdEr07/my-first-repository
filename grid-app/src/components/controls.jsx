function Controls({ moveSelection }) {
  return (
    /*
      Contenedor de los botones.
    */

    <div className="controls">
      {/* =========================
          BOTONES DE DIRECCIÓN
      ========================= */}

      {/*
        Cuando hacemos click,
        llamamos a moveSelection
        y enviamos la dirección.
      */}

      <button onClick={() => moveSelection("left")}>
        ←
      </button>

      <button onClick={() => moveSelection("up")}>
        ↑
      </button>

      <button onClick={() => moveSelection("down")}>
        ↓
      </button>

      <button onClick={() => moveSelection("right")}>
        →
      </button>
    </div>
  );
}

export default Controls;