// 1. Crea una clase que reciba dos propiedades

// 2. Añade un método a la clase que utilice las propiedades

// 3. Muestra los valores de las propiedades e invoca a la función

// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático

// 6. Crea una clase que haga uso de herencia

// 7. Crea una clase que haga uso de getters y setters

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 

//****************************************************************************************************/
// 1
class Producto {

    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }

    infoProducto() {   // Ejercicio 2
        console.log(`El ${this.nombre} cuesta ${this.precio} euro/s. `)
    }

    static contarProductos(productos) {    // Ejercicio 4
        return productos.length
    }
}

//****************************************************************************************************/
// 3

let producto1 = new Producto("agua", 1)
console.log(producto1)
producto1.infoProducto()

//****************************************************************************************************/
// 4 

let producto2 = new Producto("yogurt", 2) // Añadimos dos productos más para contarlos con el metodo estático
let producto3 = new Producto("yerba", 4)

//****************************************************************************************************/
// 5

const productos = [producto1,producto2,producto3]
console.log(Producto.contarProductos(productos))

//****************************************************************************************************/
// 6, 7, 8, 9

class Vehículo {

    #año

    constructor(marca, modelo, año) {
        
        this.marca = marca;
        this.modelo = modelo;
        this.#año = año;
    }

    get año() {
        return this.#año;    // Puedo obtener el valor de la propiedad año
    }

    set año(nuevoAño) {
        this.#año = nuevoAño; // Puedo modificar el valor de la propiedad año
    }
}


class Auto extends Vehículo {

    constructor(marca, modelo, año) {
    super(marca, modelo, año)
    }
}


let myAuto = new Auto("AUDI", "TT", 1998)
console.log(myAuto)


console.log(myAuto.año) // Puedo obtener el valor de la propiedad año

myAuto.año = 2025       // Puedo modificar el valor de la propiedad año
console.log(myAuto.año)

//****************************************************************************************************/
// 10

class Empleado {
    trabajar() {
        console.log("El empleado está trabajando.");
    }
}

// Clase hija
class Programador extends Empleado {
    // Sobrescribir el método 'trabajar'
    trabajar() {
        console.log("El programador está escribiendo código.");
    }
}

let programador1 = new Programador()
programador1.trabajar()