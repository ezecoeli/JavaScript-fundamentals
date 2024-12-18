// 1. Crea un objeto con 3 propiedades

// 2. Accede y muestra su valor

// 3. Agrega una nueva propiedad

// 4. Elimina una de las 3 primeras propiedades

// 5. Agrega una función e invócala

// 6. Itera las propiedades del objeto

// 7. Crea un objeto anidado

// 8. Accede y muestra el valor de las propiedades anidadas

// 9. Comprueba si los dos objetos creados son iguales

// 10. Comprueba si dos propiedades diferentes son iguales

//******************************************************************************************** */
// 1 y 2
let personaje = {
    name: "Augustus",
    age: 35,
    especie: "Humano",
    alias: "Tren Cole",
}
console.log(personaje)

//******************************************************************************************** */
// 3

personaje.deporte = "NFL"
console.log(personaje)

//******************************************************************************************** */
// 4 

delete personaje.age
console.log(personaje)

//******************************************************************************************** */
// 5 

personaje = {
    name: "Augustus",
    age: 35,
    especie: "Humano",
    alias: "Tren Cole",
    deporte: "NFL",
    strength: function() {
        console.log("Augustus pega duro")
    }
}
console.log(personaje)
personaje.strength()

//******************************************************************************************** */
// 6
for (let key in personaje) {
    console.log(key)
}

for (let key in personaje) {
    console.log(key + ": " + personaje[key])
}

console.log(personaje.alias)

//******************************************************************************************** */
// 7

let personaje2 = {
    name: "Marcus",
    surName: "Fenix",
    especie: "Humano",
    leadership: function() {
        console.log("Soldado condecorado y un gran líder")
    },
    profession: {
        rango: "Sargento",
        pelotón: "Delta",
        info: function() {
        console.log("Líder del pelotón Delta")
        }
    }
}
console.log(personaje2)

//******************************************************************************************** */
// 8

console.log(personaje2.profession)
personaje2.profession.info()

//******************************************************************************************** */
// 9

console.log(personaje == personaje2)
console.log(personaje === personaje2)
console.log(personaje.especie == personaje2.especie)

//******************************************************************************************** */
// 10

console.log(personaje.name == personaje2.name)


