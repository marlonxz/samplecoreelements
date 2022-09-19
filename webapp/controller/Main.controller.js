sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ui5.samplecoreelements.controller.Main", {
            onInit: function () {

            },
            goToOverview: function (evt){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

                if(evt.getSource().getTitle() === "Detail"){
                    oRouter.navTo("materialInspection");
                }else{
                    oRouter.navTo("materialoverview");
                }
                
            }
        });
    });
