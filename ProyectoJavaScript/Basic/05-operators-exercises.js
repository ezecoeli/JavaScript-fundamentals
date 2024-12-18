/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Crea una variable para cada operación aritmética

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

// 5. Utiliza el operador lógico and

// 6. Utiliza el operador lógico or

// 7. Combina ambos operadores lógicos

// 8. Añade alguna negación

// 9. Utiliza el operador ternario

// 10. Combina operadores aritméticos, de comparáción y lógicas

//-----------------------------------------------------------------------------------------//

// 1
let a = 4
let b = 2

let suma = a + b
console.log(suma)
let resta = a - b
console.log(resta)
let multiplicación = a * b
console.log(multiplicación)
let división = a / b
console.log(división)
let módulo = a % b
console.log(módulo)
let exponente = a ** b
console.log(exponente)


// 2
let myVariable = a
console.log(myVariable)

myVariable += a // 4(a) + 4(myVariable) = 8
console.log(myVariable)

myVariable -= a // 8 - 4 = 4
console.log(myVariable)

myVariable *= a // 4 * 4 = 16
console.log(myVariable)

myVariable /= a // 16/4 = 4
console.log(myVariable)

myVariable %= a // 4/4 = 1 y el resto es 0
console.log(myVariable)

myVariable **= a // 0 elevado a 4 = 0
console.log(myVariable)

// 3 Comparaciones verdaderas
console.log(a > b)
console.log(a > 3)
console.log(a >= b)
console.log(a <= 4)
console.log(a === a)

// 4 Comparaciones falsas
console.log(a < b)
console.log(b === "hola")
console.log(a == 5)
console.log(a > 10)
console.log(a == null)

// 5 
console.log(a > b && a > 2)
console.log(a < b && a > b)

// 6 
console.log(a > 5 || a > 3)
console.log(a > 5 || b > 5)

// 7 
console.log(a < b && b > a || 2 > 1) // el "and" no se cumple pero el "or" si, entonces "true"

// 8 
console.log(!(a > b)) // Al añadir "!" invierto el valor 
console.log(!(a > 10))

// 9 
const is2024 = true

is2024 ? console.log("Es el año 2024") : console.log("No es el año 2024")

// 10 
let resultado = (a * b > 5 && a + b === 6) || (myVariable % 2 === 0 && a <= b)
console.log(resultado)
