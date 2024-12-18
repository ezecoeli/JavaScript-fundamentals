// array // SI admite duplicados a diferencia del set
//*************************************************************************/
// Declaración, dos ejemplos de sintaxis para array

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

//*************************************************************************/
// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1,2,3,4]
myArray2 = new Array(1,2,3,4)

console.log(myArray)
console.log(myArray2)

myArray = ["Ezequiel","Coeli","36", true]
myArray2 = new Array("Ezequiel","Coeli","36", true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "Ezequiel" 
myArray2[1] = "Coeli"
myArray2[2] = "36"

console.log(myArray2)


myArray = []
myArray[2] = "Ezequiel"
// myArray[0] = "Moure"
myArray[1] = "Coeli"

console.log(myArray)

//*************************************************************************/
// Métodos comunes

myArray = []

//*************************************************************************/
// push y pop

myArray.push("Ezequiel")
myArray.push("Camilo")
myArray.push("Coeli")
myArray.push(36)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último valor y lo devuelve
myArray.pop()

console.log(myArray)

//*************************************************************************/
// shift y unshift

console.log(myArray.shift()) // Elimina el primer elemento y lo devuelve
console.log(myArray)

myArray.unshift("Ezequiel", "Coeli") // Agregar uno o más elementos desde el principio del array
console.log(myArray)

//*************************************************************************/
// length

console.log(myArray.length)

//*************************************************************************/
// clear

myArray = []
// myArray.length = 0 // Una forma de borrar el contenido del array
console.log(myArray)

//*************************************************************************/
// slice

myArray.push("Ezequiel","Coeli","36", true) // Añadimos nuevamente elementos al array , usando push

let myNewArray = myArray.slice(1, 2) // Indicamos desde índice 1 hasta 2 pero sin tener en cuenta este último

console.log(myArray)
console.log(myNewArray)

//*************************************************************************/
// splice

myArray.splice(1, 2) // Elimina del array desde índice 1, y el 2 indica cuantas posiciones quieres eliminar
console.log(myArray)

// Otro ejemplo de splice
myArray = ["Ezequiel", "Camilo", "Coeli", 36, true]

myArray.splice(1, 2, "Nueva entrada") // Eliminamos posición 1 y 2 y añadimos "Nueva entrada"
console.log(myArray)


