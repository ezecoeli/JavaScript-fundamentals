// 1. Crea un array que almacene cinco animales

// 2. Añade dos más. Uno al principio y otro al final

// 3. Elimina el que se encuentra en tercera posición

// 4. Crea un set que almacene cinco libros

// 5. Añade dos más. Uno de ellos repetido

// 6. Elimina uno concreto a tu elección

// 7. Crea un mapa que asocie el número del mes a su nombre

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

// 9. Añade al mapa una clave con un array que almacene los meses de verano

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map


//********************************************************************** */
// 1 

let animales = []
animales = ["Gato","Perro","Caballo","Conejo","Tigre"]
console.log(animales)

//********************************************************************** */
// 2
animales.push("Delfín")
animales.unshift("Oso")
console.log(animales)
console.log(animales.length)

//********************************************************************** */
// 3 
animales.splice(3, 1) // El 3 indica desde que posicion se quiere eliminar y el 1 indica cuantos elementos eliminar.
console.log(animales)

//********************************************************************** */
// 4 
let libros = new Set(["Cocina", "Arte", "Deportes", "Fantasía", "Infantil"])

console.log(libros)

//********************************************************************** */
// 5 
libros.add("Naturaleza")
libros.add("Cocina") // No se agrega porque está repetido y "set" no permite duplicados
console.log(libros)

//********************************************************************** */
// 6
libros.delete("Arte") // Eliminamos este elemento
console.log(libros)

//********************************************************************** */
// 7 

let meses = new Map([
    ["1", "Enero"],
    ["2", "Febrero"],
    ["3", "Marzo"],
    ["4", "Abril"],
    ["5", "Mayo"],
    ["6", "Junio"],
    ["7", "Julio"],
    ["8", "Agosto"],
    ["9", "Septiembre"],
    ["10", "Octubre"],
    ["11", "Noviembre"],
    ["12", "Diciembre"],
])
console.log(meses)

//********************************************************************** */
// 8 
console.log(meses.has("5") && meses.get("5"))

//********************************************************************** */
// 9 
meses.set("verano", ["Junio", "Julio", "Agosto"])
console.log(meses)

//********************************************************************** */
// 10
let coloresArray = ["Negro", "Blanco", "Rojo"]
console.log(coloresArray)

let coloresSet = new Set (coloresArray)
console.log(coloresSet)

let coloresMap = new Map
console.log(coloresMap)

coloresMap.set("colores", coloresSet)
console.log(coloresMap)