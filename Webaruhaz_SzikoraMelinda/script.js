
$(function () {

    const termekekTomb = [];

    /* JSON szerveres elérési út */
    const fajlNev= "http://localhost:3000/termekek";

    const kosar = new Kosar();

    adatBetolt(fajlNev, termekekTomb, Kiir);


    /* adatok beolvasása fájlból */
    
    
    /* oop-s kiírás */
    function Kiir(tomb){

        const szuloElem = $("#termekSzulo");
        let sablonElem = $(".termek");

        for (let index = 0; index < termekekTomb.length; index++) {

            const ujElem = sablonElem.clone().appendTo(szuloElem);
            const ujTermek = new Termek(ujElem, termekekTomb[index]);
        }

        sablonElem.remove();
    }
    

    /* kosárba gomb megnyomása */
    $(window).on("kosarBnyomas", (event) => {

        aktElem = event.detail;
        kosar.elemKosarbaHelyezes(aktElem);

        console.log(kosar);
    })

});