sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "ui5/samplecoreelements/util/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, formatter) {
        "use strict";

        return Controller.extend("ui5.samplecoreelements.controller.materialOverView", {
            formatter: formatter,
            onInit: function () {

            }
		
        });
    });
