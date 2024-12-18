// 1. Captura una excepción utilizando try-catch

// 2. Captura una excepción utilizando try-catch y finally

// 3. Lanza una excepción genérica

// 4. Crea una excepción personalizada

// 5. Lanza una excepción personalizada

// 6. Lanza varias excepciones según una lógica definida

// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

//****************************************************************************************************************************** */
// 1 y 2

let myTryCatch

try {
    // Código que intenta ejecutar
    console.log(myTryCatch.name)
    console.log("Finaliza la ejecución sin errores")
} catch (error) {
    // Bloque de error
    console.log("La propiedad name no está definida en myTryCatch:", error.message)
} finally {
    console.log("Este mensaje aparece siempre al final.")
}

//****************************************************************************************************************** */
// 3

try {
    throw new Error("Este es un error genérico lanzado por mí :).")
} catch (error2) {
    console.log("Estoy capturando el error2", error2.message)
}

//****************************************************************************************************************** */
// 4 y 5

class myCustomError extends Error {
    constructor(mensaje) {
        super(mensaje)
        this.name = "myCustomError"
    }
}

try {
    throw new myCustomError("Este es un error personalizado" )
    
} catch(error2) {
    console.log("Estoy capturando un error personalizado:");
    console.log("Nombre del error:", error2.name); // myCustomError
    console.log("Mensaje del error:", error2.message); // Mensaje personalizado
}

//****************************************************************************************************************** */
// 6 y 7 

class miError extends Error {
    constructor(mensaje, tipo) {
        super(mensaje);
        this.tipo = tipo;
    }
}

// Lanzamos varias excepciones/errores
function lanzarError(tipo) {
    if (tipo === "autenticacion") {
        throw new miError("Fallo en la autenticación.", "autenticacion");
    } else if (tipo === "autorizacion") {
        throw new miError("Fallo en la autorización.", "autorizacion");
    } else {
        throw new miError("Error desconocido.", "desconocido");
    }
}

// Capturamos excepciones
try {
    lanzarError("autorizacion");
} catch (error3) {
    if (error3 instanceof miError) {
        console.log(`Tipo: ${error3.tipo}, Mensaje: ${error3.message}`);
    } else {
        console.log("Error inesperado:", error3.message);
    }
}

//****************************************************************************************************************** */
// 8
const valores = ["10", "3.14", "abc", "42", "NaN"]; 

for (let valor of valores) {
    try {
        const resultado = parseFloat(valor);
        if (isNaN(resultado)) {
            throw new Error(`No se pudo convertir "${valor}" a float.`);
        }
        console.log(`${valor} convertido a float: ${resultado}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

//****************************************************************************************************************** */
// 9

function verificarPropiedad(obj, propiedad) {
    if (!(propiedad in obj)) {
      console.log(`Propiedad '${propiedad}' no encontrada en el objeto.`);
      throw new Error(`La propiedad '${propiedad}' no existe en el objeto.`);
    }
  }


const persona = { nombre: 'Juan', edad: 30 };

try {
  verificarPropiedad(persona, 'direccion');
} catch (e) {
  console.log(e.message); // Imprime el mensaje de la excepción
}

//****************************************************************************************************************** */
// 10 

function reintentar(func, maxIntentos = 10) {
    let intentos = 0;
    while (intentos < maxIntentos) {
      try {
        return func();
      } catch (e) {
        intentos++;
      }
    }
    throw new Error("Max intentos alcanzados");
  }

  function ejemplo() {
    if (Math.random() < 0.7) throw new Error("Error aleatorio");
    return "Éxito!";
  }
  
  try {
    console.log(reintentar(ejemplo));
  } catch (errorAleatorio) {
    console.error(errorAleatorio);
  }
  