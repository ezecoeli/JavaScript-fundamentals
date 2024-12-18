// Objects : colección de datos relacionados tipo clave-valor.
//************************************************************************************************/
// Sintaxis

let person = {
    name: "Ezequiel",
    age: 36,
    alias: "Eze",
}

//************************************************************************************************/
// Acceso a propiedades

// Notación punto
console.log(person.name) // Más práctico

// Notación de corchetes
console.log(person["name"])

//************************************************************************************************/
// Modificación de propiedades

person.name = "Camilo"
console.log(person.name)

console.log(typeof person.age) // Antes de modificar el valor es tipo number
person.age = "36"
console.log(person.age)
console.log(typeof person.age) // Después de modificarlo es tipo String

//************************************************************************************************/
// Eliminación de propiedades

delete person.age
console.log(person)

//************************************************************************************************/
// Nueva propiedad
person.email = "ezecoeli@gmail.com"
person["age"] = 36
console.log(person)

//************************************************************************************************/
// Métodos (funciones)

let person2 = {
    name: "Melisa",
    age: 29,
    alias: "Mel",
    walk: function(){
        console.log("La persona camina.")
    }
}
person2.walk()

// Anidación de objects

let person3 = {
    name: "Juan Carlos",
    age: 25,
    alias: "Juanca",
    walk: function(){
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function() {
            console.log("La persona trabaja.")
        }
    }
}

console.log(person3)

console.log(person3.name) // Accedo solo al nombre
console.log(person3.job)  // Accedo solo al objeto job
console.log(person3.job.name) // Accedo a la propiedad name dentro del objeto job
person3.job.work() // Accedo a la función work

//***********************************************************************************************/
// Igualdad de objects

let person4 = {
    name: "Camilo",
    alias: "Eze",
    email: 'ezecoeli@gmail.com',
    age: 36,
}

console.log(person)
console.log(person4)

console.log(person == person4)  // Al comparar los objects es false porque se compara la dirección de memoria, y la referencia es distinta
console.log(person === person4) // Al comparar los objects es false porque se compara la dirección de memoria, y la referencia es distinta

console.log(person.name == person4.name) // Si podemos comparar propiedades del object, por lo tanto true

//***********************************************************************************************/
// Iteración

// Accedemos a todas las claves
for (let key in person4) {
    console.log(key)
}

// Accedemos a claves y valores 
for (let key in person4) {
    console.log(key + ": " + person4[key])
}

//***********************************************************************************************/
// Funciones como objects

function Person(name, age) { // Debería ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person("Ezequiel", 36)
console.log(person5)
console.log(person5.name)

console.log(typeof person5)
console.log(typeof person4)