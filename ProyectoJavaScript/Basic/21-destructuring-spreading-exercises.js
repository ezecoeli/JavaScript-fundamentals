// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

// 3. Usa desestructuración para extraer dos propiedades de un objeto

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

// 6. Usa propagación para combinar dos arrays en uno nuevo

// 7. Usa propagación para crear una copia de un array

// 8. Usa propagación para combinar dos objetos en uno nuevo

// 9. Usa propagación para crear una copia de un objeto

// 10. Combina desestructuración y propagación  

//*****************************************************************************************************************/
// 1 y 2

let array1 = [1, 2, 3, 4]

let [valor1, valor2, valor3, valor4, valor5 = 0] = array1
console.log(valor1)
console.log(valor2)
console.log(valor3)
console.log(valor4)
console.log(valor5)

//*****************************************************************************************************************/
// 3 

//Objeto
let s117 = {
    nombre: "John-117",
    nacimiento: "7-3-2511",
    planetaNatal: "Eridanus II",
    proyecto: "SPARTAN II",
    alias: "Master Chief",
    rango: "Suboficial",

    physical: { 
        height:"218 cm",
        peso: "130 kg",
    }
}

// Desestructuración
let {nombre, alias} = s117
console.log(nombre)
console.log(alias)

//*****************************************************************************************************************/
// 4
let {nombre: name, alias: apodo} = s117
console.log(name)
console.log(apodo)

//*****************************************************************************************************************/
// 5 
let {physical: {height: physicalHeight}} = s117
console.log(physicalHeight)

//*****************************************************************************************************************/
// 6 

let asia = ["China", "India", "Malasia"]
let europa = ["España", "Holanda", "Alemania"]

let mundo =[...asia, ...europa]
console.log(mundo)

//*****************************************************************************************************************/
// 7 

let asia2 = [...asia]
console.log(asia2)

//*****************************************************************************************************************/
// 8 // Si ambos objetos tienen propiedades con el mismo nombre, la propiedad del segundo objeto sobrescribe la del primero.

let arya = {
    raza: "gato",
    color: "gris",
    sexo: "hembra",
    origen: "Córdoba",
}

let awqa = {
    raza: "perro",
    color: "blanco",
    sexo: "hembra",
    edad: 3, 
}

let misMascotas = {...arya, ...awqa,}
console.log(misMascotas)

//*****************************************************************************************************************/
// 9

let copiaArya = {...arya}
console.log(copiaArya)

//*****************************************************************************************************************/
// 10

const array2 = [1, 2, 3];
const array3 = [4, 5, 6];

// Desestructuración para extraer elementos
const [a, b, ...rest] = array2;

// Combinar con propagación
const combinedArray = [a, b, ...rest, ...array3];

console.log("Array combinado:", combinedArray);

