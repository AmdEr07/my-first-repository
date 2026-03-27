const person = {

  //se puede meter un objeto como valor de una propiedad
  firstname: "Amanda", // esta propiedad es un string
    lastName: "Espinar",
    /* esta propiedad es una funcion */
    fullName () {
      let res = this.firstname + " " + this.lastName;
      return res; 
    },

    age: 43, /* Esta propiedad es un numero */
    isFinite: false, /* esta propiedad es un booleano */

    // se puede meter un objeto como valor de una propiedad 
    address: {
      city: "Sevilla",
      estacasada: true,
      codigoPostal: 41001,
    }
    
}

// imprimir el objeto completo
console.log(person);

//imprime una propiedad del objeto
console.log(person.firstname + " " + person.lastName);

console.log(person.firstname + " vive en " + person.address.city);

console.log(person.fullName());