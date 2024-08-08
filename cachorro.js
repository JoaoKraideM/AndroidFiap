import { Mamifero } from "./animal.js";

class Cachorro extends Mamifero {
    latir() {
        console.log("Au Au");
    }
}

let cachorro = new Cachorro;

cachorro.amamentar()
cachorro.latir()
cachorro.dormir()

export { cachorro };
