// 1. Crea un función que utilice error correctamente

// 2. Crea una función que utilice warn correctamente

// 3. Crea una función que utilice info correctamente

// 4. Utiliza table

// 5. Utiliza group

// 6. Utiliza time

// 7. Valida con assert si un número es positivo

// 8. Utiliza count

// 9. Utiliza trace

// 10. Utiliza clear

//********************************************************************************************/
// 1 

function showError() {
    console.error("Algo salió mal.");
}

showError();

//********************************************************************************************/
// 2 

function showWarn() {
    console.warn("Advertencia, se enviará el correo sin asunto.");
}

showWarn();

//********************************************************************************************/
// 3 

function showInfo () {
    console.info("Gracias por suscribirse.")
}

showInfo()

//********************************************************************************************/
// 4 

let personalData = [
    {Name: "Ezequiel", Age: 36, Genre: "Male", Country: "Argentina"}
]

console.table(personalData)

//********************************************************************************************/
// 5 

console.group("Personaje:")
console.log("Name: Geralt de Rivia")
console.log("Alias:Lobo Blanco")
console.log("Raza: Humano")
console.log("Escuela: Lobo")
console.log("Profesión: Brujo")
console.groupEnd()

//********************************************************************************************/
// 6

console.time("Tiempo de ejecución del bucle:")

for (let i = 0; i > 10; i++) {

}

console.timeEnd("Tiempo de ejecución del bucle:")

//********************************************************************************************/
// 7

let dia = -1
console.assert(dia >= 0, "La variable dia debe ser un número positivo")

//********************************************************************************************/
// 8

function countMessages() {
    console.count("Contando mensajes")
}

countMessages()
countMessages()
countMessages()

//********************************************************************************************/
// 9 

function countShots() {
    console.count("Contando disparos")
    console.trace("Seguimiento de ejecución de contador de disparos.")
}

countShots()
countShots()
countShots()

//********************************************************************************************/
// 10

function countJumps() {
    console.count("Contando saltos")
}

countJumps()
countJumps()
countJumps()

console.clear()

countJumps()