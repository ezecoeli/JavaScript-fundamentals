/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Concatena dos cadenas de texto

// 2. Muestra la longitud de una cadena de texto

// 3. Muestra el primer y último carácter de un string

// 4. Convierte a mayúsculas y minúsculas un string

// 5. Crea una cadena de texto en varias líneas

// 6. Interpola el valor de una variable en un string

// 7. Reemplaza todos los espacios en blanco de un string por guiones

// 8. Comprueba si una cadena de texto contiene una palabra concreta

// 9. Comprueba si dos strings son iguales

// 10. Comprueba si dos strings tienen la misma longitud

//************************************************************************************************************************************/

// 1
let saludoInicial = "Hola, " 
let bienvenida = "Bienvenido a mi curso!"
let nombreAlumno = "Carlos. "

console.log(saludoInicial + nombreAlumno + bienvenida)

// 2
console.log(saludoInicial.length, nombreAlumno.length) // Longitudes de dos Strings impresas separadas


let sumaLongitudes = saludoInicial.length + nombreAlumno.length; // Longitudes de dos Strings sumadas
console.log(sumaLongitudes);  

// 3 
console.log(bienvenida[0]) 
console.log(bienvenida[21])

// 4
console.log(nombreAlumno.toUpperCase())
console.log(nombreAlumno.toLowerCase())

// 5
let variasLineas = `Esto es una prueba
para escribir un 
texto en varias líneas`
console.log(variasLineas)

// 6 
console.log(`Chau! ${nombreAlumno}`)

// 7
console.log(bienvenida.replace(/ /g, "-")) // La expresión "/ /g" busca todos los espacios en blanco

// 8 
console.log(bienvenida.includes("curso"))

// 9 
console.log(saludoInicial == nombreAlumno)
console.log(saludoInicial === nombreAlumno)
console.log(saludoInicial > nombreAlumno)

// 10 
console.log(bienvenida.length == nombreAlumno.length)