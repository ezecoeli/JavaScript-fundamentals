// Exportación de módulos

// Funciones

export function add(a, b) {
    return a + b
}

console.log(add(5, 10))

// Propiedades

export const PI = 3.1416
export let name = "Ezequiel"

// Clases

export class Circle {
    constructor(radius) {
        this.radius = radius
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }
}


// Exportación por defecto (sirve para importar una cosa)

export default function substract(a, b) {
    return a - b
}


// export default class MyClass {

//     func() {
//         console.log("")
//     }
// }