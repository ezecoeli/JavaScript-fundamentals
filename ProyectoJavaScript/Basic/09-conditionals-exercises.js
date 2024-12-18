// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7

//**********************************************************************************/

// 1
/*
let myName = "Ezequiel"

if (myName == "Ezequiel")
    console.log(myName)*/

// 2
let user = "usuario"
let password = "contraseña"
let message = "Correcto"

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
if (user == "usuario" && password == "contraseña")
    console.log(message)

// 3 
let numero = 0

if (numero > 0) {
    console.log("El numero es positivo ")
} else if (numero < 0) {
    console.log("El numero es negativo")
} else {
    console.log("El numero es cero")
}


// 4 
let edad = 16

const mensaje = edad > 18 ? "Puede votar" : `No puede votar, le faltan ${18 - edad} años` 
console.log(mensaje)


// 5 (utilizamos la variable edad del ejercicio anterior)

const adultez = edad > 18 ? "Adulto" : "Menor"
console.log(adultez)

// 6
let mes = "Febrero"

if (mes == "Abril" || mes == "Mayo" || mes == "Junio"){
    console.log("Primavera")
} else if (mes == "Julio" || mes == "Agosto" || mes == "Septiembre") {
    console.log("Verano")
} else if (mes == "Octubre" || mes == "Noviembre" || mes == "Diciembre") {
    console.log("Otoño")
} else  {
    console.log("Invierno")
}


// 7 Seguimos con el mes del ejercicio anterior
let dias

if (mes == "Abril" || mes == "Mayo" || mes == "Junio"){
    console.log("Primavera")
} else if (mes == "Julio" || mes == "Agosto" || mes == "Septiembre") {
    console.log("Verano")
} else if (mes == "Octubre" || mes == "Noviembre" || mes == "Diciembre") {
    console.log("Otoño")
} else  {
    console.log("Invierno")
}

if (mes == "Enero" || mes == "Marzo" || mes == "Mayo" || mes == "Julio" || mes == "Agosto" || mes == "Octubre" || mes == "Diciembre") {
    dias = 31; // Meses con 31 días
} else if (mes == "Febrero") {
    dias = 28; // Febrero tiene 28 días (29 en año bisiesto, pero no lo consideramos)
} else {
    dias = 30; // Todos los demás meses con 30 días
}
console.log(`El mes de ${mes} tiene ${dias}`) // Se obtiene el mes expresado en el ejercicio 6



// 8
let idioma = "Alemán" 
let saludo

switch (idioma) {
    case "Español":
        saludo = "Hola"
        break
    case "Inglés":  
        saludo = "Hello"
        break
    case "Alemán":
        saludo = "Hallo"
        break
    case "Francés":
        saludo = "Bonjour"
        break
    case "Italiano":
        saludo = "Ciao"
        break
    default:
        saludo = "Idioma incorrecto" // Expresión para evitar undefined si el idioma no está en la lista
}

console.log(saludo)


// 9
let month = "Abril" 
let estación

switch (month) {
    case "Abril": 
    case "Mayo": 
    case "Junio":
        estación = "Primavera"
        break

    case "Julio":
    case "Agosto": 
    case "Septiembre":
        estación = "Verano"
        break

    case "Octubre": 
    case "Noviembre": 
    case "Diciembre":
        estación = "Otoño"
        break

    case "Enero": 
    case "Febrero": 
    case "Marzo":
        estación = "Invierno"
        break   

    default:
        estación = "Mes incorrecto" // Expresión para evitar undefined si el idioma no está en la lista
}

console.log(estación)


// 10
let mesElegido = "Marzo"
let days

switch (mesElegido) {
    case "Enero":  
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        days = 31 
        break  

    case "Febrero": 
        days = 28
        break

    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        days = 30
        break
    
        default:
            days = "Mes incorrecto"
}

if (days ==="Mes incorrecto"){
    console.log("Error, el mes ingresado es inválido.")
} else {
console.log(`El mes de ${mesElegido} tiene ${days} días.`) 
}
