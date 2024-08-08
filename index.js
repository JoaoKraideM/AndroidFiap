import { Animal, Mamifero } from "./animal.js";
import { cachorro } from "./cachorro.js";


class Pessoa {
    falarMeuNome(a) {
        console.log("Meu nome é " + a);
    }
}
let pessoa = new Pessoa()
let animal = new Animal()
let mamifero = new Mamifero()

pessoa.falarMeuNome("Caio")
animal.dormir()

mamifero.dormir()
mamifero.amamentar()

cachorro.latir()
cachorro.dormir()
cachorro.amamentar()