// Creamos un array llamado frutas con 3 elementos
let frutas = ["Manzana", "Naranja", "Pera"];

// Mostramos varios números en consola
console.log(1, 2, 3, 4, 5);

// Cambiamos el elemento que está en la posición 1
// Posición 0 = Manzana
// Posición 1 = Naranja
// Ahora Naranja pasa a ser Albaricoque
frutas[1] = "Albaricoque";

// Mostramos todo el array para ver el cambio
console.log(frutas);

// .length dice cuántos elementos hay en el array
console.log(frutas.length);

// .pop() elimina el último elemento del array
frutas.pop();

// .push() añade un elemento al final del array
frutas.push("Manzana");

// Mostramos el array después de quitar uno y añadir otro
console.log(frutas);

// .shift() elimina el primer elemento del array
frutas.shift();

// Mostramos el array después de quitar el primer elemento
console.log(frutas);

// Creamos un segundo array
let frutas2 = ["Pera", "Kiwi", "Fresa"];

// .concat() une dos arrays y crea uno nuevo
let frutas3 = frutas.concat(frutas2);

// Mostramos el nuevo array unido
console.log(frutas3);

// Creamos un array de números
let numeros = [1, 2, 3, 4, 5];

// .find() busca el primer elemento que cumpla la condición
// Aquí busca el primer número mayor que 2
let resultado = numeros.find(n => n > 2);

// Mostramos el resultado
console.log(resultado);

// .map() crea un nuevo array transformando cada elemento
// Aquí elevamos cada número al cuadrado
let suma = numeros.map(n => n ** 2);

// Mostramos el nuevo array con los cuadrados
console.log(suma);

// Creamos un objeto llamado personas
let personas = {
  // Propiedad nombre
  nombre: "Alice",

  // Propiedad edad
  edad: 30,

  // Propiedad ciudad
  ciudad: "Madrid",

  // Otro objeto dentro del objeto principal
  address: {
    calle: "Calle Mayor",
    numero: 10
  },

  // Método: una función dentro de un objeto
  saludar() {
    // this.nombre significa: el nombre de ESTE objeto
    // this.edad significa: la edad de ESTE objeto
    return "Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.";
  }
};

// Llamamos al método saludar
console.log(personas.saludar());

// Accedemos a una propiedad dentro de otro objeto
console.log(personas.address.calle);

// Accedemos a la propiedad edad del objeto
console.log(personas.edad);
