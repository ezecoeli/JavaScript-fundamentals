/// Operadores

// Operadores aritméticos

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División

console.log(a % b) // Módulo
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a)

b-- // Decremento
console.log(b)


// Operadores de asignación

let myVariable = 2
console.log(myVariable)
myVariable += 2 // myVariable = myVariable + 2   es lo mismo
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

// Operadores de comparación

console.log(a > b)
console.log(a < b)
console.log(a >= b) // ¿ a es mayor o igual que b ?
console.log(a <= b)
console.log(a == b)
console.log(a == 6) // Igualdad por valor (a habia cambiado a 6 con el incremento ++)
console.log(a == "6") // Igualdad por valor en texto
console.log(a == a)
console.log(a === a) // Igualdad por identidad (por tipo y valor)
console.log(a === 6)
console.log(a === "6") // false porque no es texto (String)
console.log(a != 6) // a NO es distinto de 6
console.log(a !== "6") // a Si es distinto de 6 por ser texto
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null) 
console.log(undefined === null)

/// Truthy values (valores verdaderos)

// Todos los numeros positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacías
// El boolean true

/// Falsy values (valores falsos)

// 0
// 0n  (cero como BigInt)
// null
// undefined
// NaN
// El boolean false
// Cadenas de texto vacías


/// Operadores lógicos (comparar valores booleanos)

// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

// or (ó) ||
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)

console.log(5 > 10 && 15 > 20 || 30 < 40) // Se cumple al menos una condición

// not (!) 
console.log(!(true))
console.log(!(false))
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores ternarios

const isRaining = true

isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")