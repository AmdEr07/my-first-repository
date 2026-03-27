// ===============================
// PRIMEROS PASOS EN JAVASCRIPT
// ===============================

// Imprime un mensaje en consola
// 👉 console.log sirve para mostrar información
console.log("Hello World!");


// ===============================
// VARIABLES
// ===============================

// Crear una variable llamada counter con valor 0
// 👉 let permite crear variables que pueden cambiar
let counter = 0;

// Mostrar una línea separadora
console.log('-----------------------------');

// Mostrar el valor de la variable
console.log(counter); // 0

// Mostrar el tipo de dato
console.log(typeof counter); // number


// ===============================
// IMPORTANTE SOBRE CONSOLE
// ===============================

// ❌ NO hacer esto (rompe el código)
// console = "Hola";

// 👉 console es una herramienta interna de JavaScript
// 👉 tiene funciones como console.log()

console.log('-----------------------------');

// Volvemos a imprimir valores
console.log(counter);
console.log(typeof console); // object


// ===============================
// CAMBIO DE TIPOS (MUY IMPORTANTE)
// ===============================

// Crear variable
let myVar = 0;

// Mostrar valor y tipo
console.log(myVar);        // 0
console.log(typeof myVar); // number


// Cambiar a número decimal
myVar = 4.5;

console.log(myVar);        // 4.5
console.log(typeof myVar); // number


// Cambiar a texto
myVar = "John Doe";

console.log(myVar);        // John Doe
console.log(typeof myVar); // string


// Cambiar a booleano
myVar = false;

console.log(myVar);        // false
console.log(typeof myVar); // boolean


// ===============================
// ERRORES COMUNES (NO EJECUTAR)
// ===============================

// ❌ No puedes redeclarar una variable con let
// let myVar = 10;

// ❌ const no permite cambiar el valor
// const myVar2 = 0;
// myVar2 = 5;


// ===============================
// PRUEBA EXTRA
// ===============================

// Puedes probar cambiando valores tú misma
let nombre = "Amanda";
console.log(nombre); // Amanda

nombre = 25;
console.log(typeof nombre); // number

