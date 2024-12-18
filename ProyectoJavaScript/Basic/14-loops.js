// Loops o bucles
//************************************************************************************************* */
// for // Ejemplo (variable = valor inicial del indice ; condicion para que se siga ejecutando el bucle ; condicion para modificar el valor del indice)
       // Si todo lo de arriba se cumple se ejecuta el console.log

for (let i = 0; i < 5; i++) { // El bucle empieza desde indice "0", condicion que sea menor que "5", ++ indica que vaya incrementando
    console.log(`Hola ${i}`)  
}

// for interactuando con array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < numbers.length; i++) { // Al usar length somos capaces de seguir accediendo a los indices aunque aumentemos nuestro array
    console.log(`Elemento: ${numbers[i]}`)
}

//************************************************************************************************* */
// while

let i = 0 

while (i < 5) {
    console.log(`Hola ${i}`)  
    i++
}

//************************************************************************************************* */
// do while

i = 6
do {
    console.log(`Hola ${i}`)
    i++
} while (i < 5)

//************************************************************************************************* */
// for of

myArray = [1, 2, 3, 4]

mySet = new Set(["Ezequiel", "Camilo", "Coeli", 36, true, "ezecoeli@gmail.com"])

myMap = new Map([
    ["name", "Ezequiel"],
    ["email", "ezecoeli@gmail.com"],
    ["age", 36]
])

myString = "¡Hola, JavaScript!"

for (let value of myArray) {
    console.log(value)
}

for (let value of mySet) {
    console.log(value)
}

for (let value of myMap) {
    console.log(value)
}

for (let value of myString) {
    console.log(value)
}

//************************************************************************************************* */
// Buenas prácticas

// break y continue

for (let i = 0; i < 10; i++) {
    if(i == 5){ // con esto no tiene en cuenta el 5
        continue
    } else if (i == 6) { // con esto frena antes de llegar al 6
        break
    }
    
    console.log(`Hola ${i}`)  
}

