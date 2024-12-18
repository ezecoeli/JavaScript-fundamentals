// Excepción

// Produce una excepción, el objeto que he creado no tiene una propiedad "email":
// let miObjeto
// console.log(myObjeto.email)

//*******************************************************************************/
// Captura de errores

// try-catch

let myObject

try {
    // Código que intenta ejecutar
    console.log(myObject.email)
    console.log("Finzaliza la ejecución sin errores")
} catch {
    // Bloque de error
    console.log("Se ha producido un error")
}

//*******************************************************************************/
// Captura del error

try { 
    console.log(myObject.email)   
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}

//*******************************************************************************/
// finally

try { 
    console.log(myObject.email)   
} catch (error) {
    console.log("Se ha producido un error:", error.message)
} finally {
    console.log("Este código se ejecuta siempre")
}

//*******************************************************************************/
// Lanzamiento de errores

// throw

// throw new Error("Se ha producido un error");

function sumIntegers(a, b) {

    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError ("Esta operación solo suma números")
    }
   
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación sólo suma números enteros")
    }

    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se está intentando sumar cero", a, b)
        
    }
        
    return a + b
}

try { // try para producir errores
console.log(sumIntegers(5, 10))
//console.log(sumIntegers(5.5, 10))
console.log(sumIntegers("5", 10))
//console.log(sumIntegers(5, "10"))
//console.log(sumIntegers("5", "10"))
} catch (error) {
    console.log("Se ha producido un error:", error.message) // Capturamos e imprimimos el error
}

//*******************************************************************************/
// Capturar varios tipos de errores

try {

// console.log(sumIntegers(5.5, 10))
console.log(sumIntegers("5", 10))

} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido un error:", error.message)
    }
}

//*******************************************************************************/
// Crear excepciones personalizadas (crear error personalizado)

class SumZeroIntegerError extends Error {
    constructor(message, a, b){
        super(message)
        this.a = a 
        this.b = b
    }

    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}

try {
    console.log(sumIntegers(0, 10))
} catch (error) {
    console.log("Se ha producido un error personalizado:", error.message)
    error.printNumbers()
}