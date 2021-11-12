
class Termek {

    constructor(elem, adat) {

        this.elem = elem;
        this.adat = adat;

        this.nev = this.elem.children("h3");
        this.kep = this.elem.children("img");
        this.leiras = this.elem.children("p:first");
        this.ar = this.elem.children("p:last");
        this.kosarB = this.elem.children("button");

        this.setAdatok(this.adat);

        this.kosarB.on("click", () => {

            this.kosarbaRak();
        });

    }

    setAdatok(ertekek) {

        this.nev.html(ertekek.nev);
        this.kep.attr("src", ertekek.kep);
        this.leiras.html(ertekek.leiras);
        this.ar.html(ertekek.ar);
    }

    kosarbaRak() {

        let esemeny = new CustomEvent("kosarBnyomas", {detail:this.adat});
        window.dispatchEvent(esemeny);
    }

}