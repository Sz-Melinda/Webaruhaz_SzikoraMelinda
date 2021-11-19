
class Ajax {

    constructor() {

        
        adatBetolt(fajlNev, tomb, myCallback) {

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
    }

}