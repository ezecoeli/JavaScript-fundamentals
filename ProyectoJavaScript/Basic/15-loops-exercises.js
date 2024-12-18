// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

// 8. Usa un bucle para invertir una cadena de texto

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10


//************************************************************************************************* */
// 1
for (let i = 1; i < 21; i++) {
    console.log(`${i}`)
}

//************************************************************************************************* */
// 2 
let suma = 0;
let i = 1;

while (i <= 100) {
    suma += i; // Sumar el número actual
    i++; // Incrementar el contador
}

console.log(`La suma de los números del 1 al 100 es: ${suma}`);

//************************************************************************************************* */
// 3 
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

//************************************************************************************************* */
// 4

const nombres = ["Melisa", "Juan", "Carlos", "Maria"]

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
}

//************************************************************************************************* */
// 5 
const texto = "Hola Mundo"
const vocales = "aeiou"
let contador = 0

for (let i = 0; i < texto.length; i++ ){
    if (vocales.includes(texto[i])){
    contador++;
    }
}
console.log(contador)

//************************************************************************************************* */
// 6 

const numeros = [2,3,4,5]
let producto = 1

for (const numero of numeros) {
    producto *= numero;
}
console.log(producto)

//************************************************************************************************* */
// 7 

const numero = 5
const limite = 10

for (let i = 1; i <= limite; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`)
}

//************************************************************************************************* */
// 8 
const texto2 = "Hola, mundo"; // Cadena original
let invertido = ""; // Cadena invertida inicializada vacía

for(let i = texto.length - 1; i >= 0; i--) {
    invertido += texto[i];
}
console.log(invertido)

//************************************************************************************************* */
// 9 
let fibonacci = [0, 1];

for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci)

//************************************************************************************************* */
// 10
let numeros5 = [5,10,15,20]
let mayoresADiez = []

for (let i = 0; i < numeros5.length; i++) {
    if(numeros5[i] > 10) {
    mayoresADiez.push(numeros5[i]);
    }
}
console.log(mayoresADiez)

