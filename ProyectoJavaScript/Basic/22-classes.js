// Classes: es una plantilla para generar objetos.

class Person {

    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

//***********************************************************************************************/
// Sintaxis

let person = new Person("Ezequiel", 36, "Eze")
let person2 = new Person("Ezequiel", 36, "Eze")

console.log(person)
console.log(person2)

console.log(typeof person)

//***********************************************************************************************/
// Valores por defecto

class DefaultPerson {

    constructor(name = "Nombre por defecto", age = 0, alias= "Sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person3 = new DefaultPerson
console.log(person3)

//***********************************************************************************************/
// Acceso a propiedades

console.log(person3.alias)
console.log(person3.name)

//***********************************************************************************************/
// Modificar valores

person3.alias = "Eze"
console.log(person3.alias)

//***********************************************************************************************/
// Funciones en classes

class PersonWithMethod {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
    walk() {
         console.log("La persona camina")   
    }
}

let person4 = new PersonWithMethod("Ezequiel", 36, "Eze")
console.log(person4)
person4.walk()

//***********************************************************************************************/
// Propiedades privadas

class PrivatePerson {

    #bank

    constructor(name, age, alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay() {
        this.#bank
    }
}

let person5 = new PrivatePerson("Ezequiel", 36, "Eze", "IBAN5168165123")

// console.log(person5.bank) // No podemos acceder porque es privado

//****************************************************************************************** */
// Getters y Setters

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() {              // La propiedad name es legible pero no modificable
        return this.#name
    }

    set bank(newBank) {       // La propiedad se puede modificar
        this.#bank = newBank
    }

    get bank() {
        return this.#bank
    }
}

let person6 = new GetSetPerson ("Ezequiel", 36, "Eze", "IBAN548926540040")
console.log(person6)
console.log(person6.name)

person6.bank = "new IBAN46123131"
console.log(person6.bank)

//************************************************************************************************* */

// Herencia: sirve para heredar propiedades/comportamiento de una clase

class Animal {

    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("El animal emite un sonido genérico")
    }
}


class Dog extends Animal {

    sound(){
        console.log("Guau!")
    }

    run(){
        console.log("El perro corre")
    }
}

class Fish extends Animal {

    constructor(name, size){
        super(name)
        this.size = size

    }

    swim(){
        console.log("El pez nada")
    }
}

let myDog = new Dog("Santa")
myDog.run()
myDog.sound()

let myFish = new Fish("Doris", 10)
myFish.swim() // Error porque no es una funcion de Fish
myFish.sound()

//*************************************************************************************************** */
// Métodos estáticos

class MathOperations {

    static sum(a, b){
        return a + b
    }
}

console.log(MathOperations.sum(5, 10))