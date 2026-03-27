function MultiploDeTres(num) {

    if (num % 3 === 0) {
        return true;
    } else {
        return false;
    }

}
console.log(MultiploDeTres(9)); // true
console.log(MultiploDeTres(10)); // false

function contarMultiplosDeTres(n) {

    let contador = 0;

    for (let iter = 1; iter <= n; iter++) {

        if (iter % 3 === 0) {
            contador++;
        }

    }

    return contador;
}
console.log(contarMultiplosDeTres(10)); // 3    



function mostrarInforme(n) {

    let total = contarMultiplosDeTres(n);

    console.log("Hay " + total + " múltiplos de 3 entre 1 y " + n);

}
mostrarInforme(10); // Hay 3 múltiplos de 3 entre 1 y 10
mostrarInforme(20); // Hay 6 múltiplos de 3 entre 1 y 20    