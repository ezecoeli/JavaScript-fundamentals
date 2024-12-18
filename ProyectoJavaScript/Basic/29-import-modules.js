// Impotación de módulos (con el fichero 28)

import { add, PI, name, Circle } from "./28-export-modules.js"

import resta from "./28-export-modules.js" // Aun cambiando el nombre al import (substract del fichero 28) se puede utilizar 

//*************************************************************/
// funciones

console.log(add(5, 10))

//*************************************************************/
// Propiedades

console.log(PI)
console.log(name)

//*************************************************************/
// Clases

let circle = new Circle(10)
console.log(circle.radius)
console.log(circle.area().toFixed(2)) // toFixed para 2 decimales

//*************************************************************/
// Importación por defecto

console.log(resta(5, 10))

//*************************************************************/
// Proyecto modular

// Importar algo de otro sitio:
// import { MyImport } from "./directory/file.js"

//*************************************************************/
// Módulos externos

const os = require("os")






