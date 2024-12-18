// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado


//************************************************************************************************************ */
// 1 
export function suma(a = 1, b = 2) {
    return a + b;
}

const resultado = suma(); // Usa los valores predeterminados: 1 + 2 = 3
console.log(resultado); // Imprime 3

//************************************************************************************************************ */
// 2 

function encontrarMayor(array) {
    if (array.length === 0) {
        throw new Error("El array está vacío"); // Antes de llamar a Math.max se verifica, con la instrucción throw new, si el array está vacío para evitar errores inesperados.
    }
    return Math.max(...array); // La funcion Math.ax devuelve el número más grande de una lista de números. 
}


const numeros = [10, 5, 8, 20, 3];
console.log(encontrarMayor(numeros)); // Devuelve 20

//************************************************************************************************************ */
// 3

function contarVocales (cadena) {
    const vocales = "aeiouAEIOU" // Definimos las vocales en minúsculas y mayúsculas para que la función sea insensible a mayúsculas.
    let contador = 0

    for (let i = 0; i < cadena.length; i++ ) { // Recorremos cada carácter del string con un bucle for.
    if (vocales.includes(cadena[i])) { // La función includes verifica si el carácter actual está en la lista de vocales.
    contador++;  // Incrementar el contador si el carácter es una vocal
    }
  }

  return contador;
}

const textoVocales = "Hola Mundo";
console.log(contarVocales(textoVocales)); // Devuelve 4 vocales

//************************************************************************************************************ */
// 4

function convertirAMayusculas(array) {
    return array.map(str => str.toUpperCase()); // array.map() . Para recorrer cada elemento del array y aplicar una función a cada uno de esos elementos.
}                                               // str.toUpperCase() . Para convertir cada string a mayúsculas.


const palabras = ["hola", "mundo", "javascript"];
const mayusculas = convertirAMayusculas(palabras);
console.log(mayusculas); // Devuelve ["HOLA", "MUNDO", "JAVASCRIPT"]

//************************************************************************************************************ */
// 5 
function esPrimo(num) {
    if (num <= 1) return false; // Los números menores o iguales a 1 no son primos
    for (let i = 2; i <= Math.sqrt(num); i++) { // Solo es necesario revisar hasta la raíz cuadrada de num
        if (num % i === 0) {
            return false; // Si num es divisible por i, no es primo
        }
    }
    return true; // Si no se encontró ningún divisor, es primo
}

console.log(esPrimo(7));  // true
console.log(esPrimo(10)); // false
console.log(esPrimo(1));  // false

//************************************************************************************************************ */
// 6

function elementosComunes(array1, array2) {
    return array1.filter(element => array2.includes(element)); // El método filter() recorre array1 y devuelve un nuevo array que contiene solo los elementos que cumplen una condición.
}                                  // Dentro de filter(), usamos includes() para comprobar si el elemento actual de array1 también está presente en array2.


const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const comunes = elementosComunes(array1, array2);
console.log(comunes); 

//************************************************************************************************************ */
// 7 

function sumaPares(array3) {
    let suma2 = 0;
    for (let i = 0; i < array3.length; i++) { // Recorremos cada elemento del array3 con un bucle for, desde el primer hasta el último.
        if (array3[i] % 2 ===0){ // Dentro del bucle, verificamos si el número actual es par (array3[i] % 2 === 0).
            suma2 += array3[i]; //  Si el número es par, lo sumamos a la variable suma2.
        }
    }
    return suma2;
}

const numeros2 = [1,2,3,4,5,6]
console.log(sumaPares(numeros2));

//************************************************************************************************************ */
// 8
function elevadosCuadrado(array4) {
    return array4.map(num => num ** 2); // map recorre el array y aplica una función a cada elemento. En este caso, se toma cada número num y se eleva al cuadrado utilizando num ** 2
}                                 


const numeros3 = [1, 2, 3, 4, 5];
console.log(elevadosCuadrado(numeros3)); 

//************************************************************************************************************ */
// 9 

function invertirPalabras(cadena1) {
    let resultado1 = '';
    let palabra = '';
    
    for (let i = cadena1.length - 1; i >= 0; i--) { // Recorremos la cadena desde el final (i = cadena.length - 1), lo que permite construir las palabras en orden inverso a medida que las encontramos.
        const caracter = cadena1[i];
        
        if (caracter === ' ') {
            if (palabra) {
                resultado1 += palabra + ' ';
                palabra = '';
            }
        } else {
            palabra = caracter + palabra;
        }
    }

    // Añadir la última palabra (si la hay)
    if (palabra) {
        resultado1 += palabra;
    }
    
    return resultado1;
}

const resultado1 = invertirPalabras("Hola cómo estás");
console.log(resultado1);  

//************************************************************************************************************ */
// 10

function factorial(n) { // La función factorial(n) calcula el factorial de un número "n"
    // Si el número es 0 o 1, el factorial es 1 por definición
    if (n === 0 || n === 1) {
      return 1;
    }
    
    // Si el número es mayor que 1, se calcula recursivamente
    return n * factorial(n - 1);
  }
  
console.log(factorial(5));  
console.log(factorial(3));  
console.log(factorial(0));  
  
