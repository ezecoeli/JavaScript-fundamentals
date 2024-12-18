// set // No admite duplicados a diferencia del array

//************************************************************************************* */
// Declaración

let mySet = new Set()

console.log(mySet)

//************************************************************************************* */
// Inicialización

mySet = new Set(["Ezequiel", "Camilo", "Coeli", 36, "Fuengirola"])
console.log(mySet)

//************************************************************************************* */
// Métodos comunes

// add y delete

mySet.add("Argentina") // Añade un elemento al final
console.log(mySet)

mySet.delete("Argentina") // Elimina el elemento indicado
console.log(mySet)

console.log(mySet.delete(36)) // Eliminamos un elemento, y devuelve true o false dependiendo si pudo borrrarlo o no.
console.log(mySet)

//************************************************************************************* */
// has

console.log(mySet.has("Coeli")) // Comprobamos si el set contiene el elemento "Coeli", por lo tanto "true"
console.log(mySet.has(36)) // Comprobamos si el set contiene el elemento "36", por lo tanto "false", porque lo borramos anteriormente

//************************************************************************************* */
// size

console.log(mySet.size) // El tamaño del set es 4 porque tiene 4 elementos.

//************************************************************************************* */
// Convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray)

//************************************************************************************* */
// Convertir un array a set

mySet = new Set (myArray)
console.log(mySet)

//************************************************************************************* */
// No admite duplicados

mySet.add("Coeli")
mySet.add("Coeli")
console.log(mySet)


