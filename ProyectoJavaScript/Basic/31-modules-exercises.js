// He creado un fichero 32 para realizar las importaciones.-

// 1. Exporta una función

// 2. Exporta una constante

// 3. Exporta una clase

// 4. Importa una función

// 5. Importa una constante

// 6. Importa una clase

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

// 9. Exporta una función, una constante y una clase desde una carpeta

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior

//******************************************************************************************************/
// 1 

export function multiplicar(a, b) {
    return a * b
}

console.log(multiplicar(2, 5))

//******************************************************************************************************/
// 2

export const nombre = "Ezequiel"

//******************************************************************************************************/
// 3

export class Vehículo {

    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}

//******************************************************************************************************/
// 4

import { dividir } from "../CarpetaEjercicios31/32-exercises31.js";

console.log(dividir(4,2))

//******************************************************************************************************/
// 5

import { nacionalidad } from "../CarpetaEjercicios31/32-exercises31.js";

console.log(nacionalidad)

//******************************************************************************************************/
// 6

import { Coche } from "../CarpetaEjercicios31/32-exercises31.js";

let coche1 = new Coche("Lamborgini", "Veneno")
console.log(coche1)

//******************************************************************************************************/
// 7 y 8 -NO PUEDEN REALIZARSE-

//******************************************************************************************************/
// 9 y 10 - Se realiza con la carpeta "CarpetaEjercicios31" y con este fichero