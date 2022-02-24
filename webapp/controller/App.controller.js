sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/sap/o2cSD/salesorders/model/formatter",
    "sap/ui/core/Fragment",
    "sap/ui/model/Sorter"

    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Formatter, Fragment, Sorter) {
        "use strict";

        return Controller.extend("com.sap.o2cSD.salesorders.controller.App", {
            formatter : Formatter,
            onInit: function () {

            }
           
        
        });
    });
