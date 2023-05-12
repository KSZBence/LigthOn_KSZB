class Lampa{
    #allapot
    #id
    #divElem    
    constructor(id, allapot, szuloElem){
        let htmllampa
        if (allapot == true) {
            htmllampa = `<div style="background:green" id="${id}"></div>`
        }else{
            htmllampa = `<div style="background:red" id="${id}"></div>`
        }

        szuloElem.append(htmllampa);
        this.#allapot = allapot
        this.#divElem = szuloElem.children("div:last-child");

        this.#divElem.on("click", ()=>{
            this.setAllapot();
        })
    }

    setAllapot(){
        if (this.#allapot === true) {
            this.#allapot = false
        } else {
            this.#allapot = true
        }
        this.#szinBeallit();
    }

    #szinBeallit(){
        if (this.#allapot === true) {
            this.#divElem.attr("style", "background:green")
        } else {
            this.#divElem.attr("style", "background:red")
        }
    }

    #kattintasTrigger(){

    }

}
export default Lampa