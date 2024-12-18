// Funciones
//**************************************************************************************** */
// Simple

function myFunc() {
    console.log("Hola función")
}

//**************************************************************************************** */
// Combinamos funcion con loops
for (let i = 0; i < 5; i++) {
    myFunc()
}

//**************************************************************************************** */
// Con parámetros

function myFuncWithParams(name) {
    console.log(`Hola, ${name}`)
}

myFuncWithParams("Ezequiel")
myFuncWithParams("Camilo")

//**************************************************************************************** */
// Funciones anónimas

const myfunc2 = function (name) {
    console.log(`Hola, ${name}`)
}
myfunc2("Ezequiel Coeli")

//**************************************************************************************** */
// Arrow functions

const myFunc3 = (name) => {
    console.log(`Hola, ${name}`)
}

const myFunc4 = (name) => console.log(`Hola, ${name}`)

myFunc3("Ezequiel Coeli")
myFunc4("Ezequiel Coeli")

//**************************************************************************************** */
// Parámetros

function sum(a, b) {  // Creamos función sum con dos parámetros
    console.log(a + b) // imprimir suma de dos parámetros
}

sum(5, 10) // Llamo a sum y le paso los parámetros que quiero que sume
sum(5) // Error NaN porque no hay dos valores
sum() // Error NaN porque no hay dos valores

// Valores por defecto (para evitar NaN)
function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

defaultSum() // Imprime los valores por defecto (0 + 0 = 0) 
defaultSum(5)
defaultSum(5, 10)
defaultSum(b = 5)

//**************************************************************************************** */
// Retorno de valores

function mult(a, b){
    return a * b
}

let result = mult(5, 10)
console.log(result)

//**************************************************************************************** */
// Funciones anidadas

function extern() {
    console.log("Función externa")
    function intern() {
        console.log("Función interna")
    }
    intern()
}
extern()
// intern() // Error: fuera del scope

extern()

//**************************************************************************************** */
// Funciones de orden superior (reciben otras funciones como argumentos)

function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4, "Función de orden superior")

//**************************************************************************************** */
// forEach

myArray = [1, 2, 3, 4]

mySet = new Set(["Ezequiel", "Camilo", "Coeli", 36, true, "ezecoeli@gmail.com"])

myMap = new Map([
    ["name", "Ezequiel"],
    ["email", "ezecoeli@gmail.com"],
    ["age", 36]
])

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))
