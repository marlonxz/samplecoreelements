sap.ui.define(function(){
    "use string";
    return {
        formatBarColor: function(sQuantity){
            if(sQuantity>10){
                return "Good";
            }else if(sQuantity<10 && sQuantity>4){
                return "Neutral";
            }else{
                return "Error";
            }
        }

    };
});