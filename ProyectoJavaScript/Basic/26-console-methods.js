// Console
//*****************************************************************************************************/
// log

console.log("Hola, JavaScript")

//*****************************************************************************************************/
// error

console.error("Este es un mensaje de error.")
console.error("Error al conectarse a la base de datos", new Error("Conexión fallida."))

//*****************************************************************************************************/
// warn

console.warn("Este es un mensaje de advertencia.")

//*****************************************************************************************************/
// info

console.info("Este es un mensaje de información adicional.")

//*****************************************************************************************************/
// table

let data = [
    ["Ezequiel", 36],
    ["Melisa", 29]
]
console.table(data)

data = [ // ahora las columnas tienen nombres(claves)
    {name: "Ezequiel",age: 36},
    {name:"Melisa",age: 29}
]
console.table(data)

//*****************************************************************************************************/
// group

console.group("Usuario:") // Iniciamos un grupo
console.log("Nombre: Ezequiel")
console.log("Edad: 36")
console.groupEnd() // Cerramos el grupo

console.log("Fuera del grupo")

//*****************************************************************************************************/
// time

console.time("Tiempo de ejecución 1") // Damos un nombre a la medición

for (let i = 0; i < 10000; i++) {

}

console.time("Tiempo de ejecución 2") // Damos un nombre a la medición

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 1") // Damos el mismo nombre para terminar la medición
console.timeEnd("Tiempo de ejecución 2")

//*****************************************************************************************************/
// assert 

let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad.") // Imprime si falla

//*****************************************************************************************************/
// count

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

//*****************************************************************************************************/
// trace - Rastrear la ejecución del código

function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecución.")
}

funcA()

//*****************************************************************************************************/
// clear - Limpiar consola

console.clear()
