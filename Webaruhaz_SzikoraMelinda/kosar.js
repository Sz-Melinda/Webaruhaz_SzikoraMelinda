
class Kosar {

    constructor() {

        this.kosarTomb = [];
    }

    elemKosarbaHelyezes(elem) {

        this.kosarTomb.push(elem);

        this.kosarMegjelenit();
    }

    kosarMegjelenit() {

        $("#kosarTartalom").empty();
        $("#osszAr").empty();

        let osszeg = 0;

        $("#kosarTartalom").append("<table>");

        for(let i = 0; i < this.kosarTomb.length; i++) {

            $("table").append("<tr> <th>" + this.kosarTomb[i]['nev'] + "</th> <th>" + this.kosarTomb[i]['ar'] + " Ft</th> <button class='torol'>Törlés</button> </tr>");

            osszeg += this.kosarTomb[i]['ar'];
        }

        $("#kosarTartalom").append("</table>");
        $("#osszAr").append(osszeg + " Ft");

        $(".torol").on("click", () => {

            this.termekTorles();
        });
    }

    termekTorles() {

        
    }


}