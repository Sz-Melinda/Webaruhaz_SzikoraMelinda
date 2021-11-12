
$(function () {

    const termekekTomb = [];
    const fajlNev="termekek.json";

    const kosar = new Kosar();

    adatBetolt(fajlNev, termekekTomb, Kiir);


    /* adatok beolvasása fájlból */
    function adatBetolt(fajlNev, tomb, myCallback) {

        $.ajax({ 

            url: fajlNev,

            success: function (result) {
                result.forEach(element => {

                    console.log(element);
                    termekekTomb.push(element);  
                });
                
                myCallback(tomb);
            },
        });

        console.log(termekekTomb);
    }
 
    
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