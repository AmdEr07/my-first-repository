function sumarHasta(positiva) {

    // comprobar si el número es válido
    if (positiva <= 0) {
        return -1; // si no vale, termina aquí
    }

    let sumar = 0; // caja donde guardamos la suma

    // repetir desde 1 hasta el número
    for (let i = 1; i <= positiva; i++) {
        sumar = sumar + i; // ir sumando poco a poco
    }

    return sumar; // devolver el resultado final
}

// llamar a la función y mostrar resultado
console.log(sumarHasta(5));
console.log(sumarHasta(3));