// contador de múltiplos de 7
let contador = 0;

// recorrer del 1 al 100
for (let i = 1; i <= 100; i++) {

  // comprobar si es múltiplo de 7
  if (i % 7 === 0) {
    contador++; // sumamos 1
  }

}

// mostrar resultado final
console.log("Cantidad de múltiplos de 7: " + contador);