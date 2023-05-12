import Lampa from "./Lampa.js";

class JatekTer{
    #db
    #allapotlista = []
    #meret = 3
    #lepes  
    constructor(){
        this.#db = 0
        this.#setAllapotLista();
        this.#ellenorzes();
        
        let main = $("main");
        for (let index = 0; index < this.#allapotlista.length; index++) {
            let lampa = new Lampa(index, this.#allapotlista[index], main);
        }

        $(window).on("kapcsolas", (event)=>{
            this.#szomszedokKeresese(event.detail);
            
        })
        
        
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

    #szomszedokKeresese(id){
        
    }

    #init(){
        
    }

    #ellenorzes(){
        for (let index = 0; index < this.#allapotlista.length; index++) {
            if (this.#allapotlista[index]===true) {
                this.#db++
            }            
        }
    }
}

export default JatekTer