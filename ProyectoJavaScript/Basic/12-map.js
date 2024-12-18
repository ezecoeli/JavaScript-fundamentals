// map 
//******************************************************************************/
// Declaración

let myMap = new Map()

console.log(myMap)

//******************************************************************************/
// Inicialización

myMap = new Map([
    ["name", "Ezequiel"],
    ["email", "ezecoeli@gmail.com"],
    ["age", 36 ],
])

console.log(myMap)

//******************************************************************************/
//Métodos y Propiedades

// set

myMap.set("alias", "Eze") // Añadimos un elemento al map
myMap.set("name", "Ezequiel Coeli") // Actualizamos el name

console.log(myMap)

// get // permite recuperar valores

console.log(myMap.get("name"))
console.log(myMap.get("surname")) // La key surname no existe en nuestro map, por lo tanto undefined

// has // comprobar si contiene un elemento o no

console.log(myMap.has("name"))
console.log(myMap.has("surname"))

// delete

myMap.delete("email")
console.log(myMap)

// keys, values y entries

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size

console.log(myMap.size)

// clear

myMap.clear() // Borramos todo el map
console.log(myMap)
