// Strings

// Concatenación de cadenas de texto

let myName = "Ezequiel"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud de cadenas de texto
console.log(greeting.length) // longitud  de "Hola, Ezequiel!" = 15

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[1])

// Métodos comunes
console.log(greeting.toUpperCase()) // Para invocar la funcion hay que colocar "()"
console.log(greeting.toLocaleLowerCase())
console.log(greeting.indexOf("Ezequiel")) // Indica cuando empieza la palabra "Ezequiel", que es el indice 6
console.log(greeting.includes("Ezequiel")) // Verificar si la cadena de texto incluye "Ezequiel"
console.log(greeting.slice(0, 9)) // Imprime los indices desde el 0 al 9
console.log(greeting.replace("Ezequiel", "Camilo")) // Reemplaza la palabra existente por la solicitada

// Templates literals 

let message = `Hola este es mi  
curso de JavaScript` // Con el acento invertido podemos escribir texto en mas de una linea

console.log(message)

console.log(`Hola, ${myName}!`) // Para interpolar variables hay que usar el acento invertido