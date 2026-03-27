// Creamos un array llamado estudiantes
// Dentro guardamos objetos (cada objeto es un estudiante)
let estudiantes = [
  {
    nombre: "Ana",       // nombre del estudiante
    edad: 20,            // edad
    notas: [7, 8, 9]     // array de notas
  },
  {
    nombre: "Luis",
    edad: 22,
    notas: [6, 5, 7]
  },
  {
    nombre: "Carlos",
    edad: 21,
    notas: [9, 8, 10]   
  },
  

];

// Creamos una función para añadir un nuevo estudiante
function agregarEstudiante(nombre, edad, notas) {

  // Creamos un objeto nuevo con los datos recibidos
  let agregarestudiantes = {
    nombre: nombre,   // guardamos el nombre
    edad: edad,       // guardamos la edad
    notas: notas      // guardamos las notas (array)
  };

  // Añadimos el nuevo estudiante al array estudiantes
  estudiantes.push(agregarestudiantes);
}

// Usamos la función para añadir un nuevo estudiante
agregarEstudiante("Amanda", 43, [10, 9, 8]);

// Mostramos el array completo en consola
console.log(estudiantes);


function agregarEstudiante(nombre, edad, notas) {
  let nuevoEstudiante = {
    nombre,
    edad,
    notas
  };

  estudiantes.push(nuevoEstudiante);
}

// añadimos Amanda
agregarEstudiante("Amanda", 43, [10, 9, 8]);

// FUNCIÓN NUEVA
function calcularPromedio(estudiante) {

  let suma = 0;

  for (let i = 0; i < estudiante.notas.length; i++) {
    suma += estudiante.notas[i];
  }

  return suma / estudiante.notas.length;
}

// probamos con el primer estudiante
console.log(calcularPromedio(estudiantes[0]));