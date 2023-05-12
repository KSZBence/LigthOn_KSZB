import Lampa from "./Lampa.js";

class JatekTer{
    #db
    #allapotlista = []
    #meret = 3
    #lepes  
    constructor(){
        this.#setAllapotLista();

        let main = $("main");
        for (let index = 0; index < this.#allapotlista.length; index++) {
            let lampa = new Lampa(index, this.#allapotlista[index], main);
        }

    }

    #setAllapotLista(){
        for (let index = 0; index < this.#meret*this.#meret; index++) {
            let huszSzazalek = Math.floor(Math.random() * 5);
            if (huszSzazalek == 0) {
                this.#allapotlista.push(true)
            } else {
                this.#allapotlista.push(false)
            }
        }
        
    }

    #szomszedokKeresese(){

    }

    #init(){
        
    }

    #ellenorzes(){
        
    }
}

export default JatekTer