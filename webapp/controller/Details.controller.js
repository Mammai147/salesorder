sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/sap/o2cSD/salesorders/model/formatter",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History"

    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Formatter, UIComponent, History) {
        "use strict";

        return Controller.extend("com.sap.o2cSD.salesorders.controller.Details", {
            formatter : Formatter,
            onInit: function () {
                var oRouter = UIComponent.getRouterFor(this);
                oRouter.getRoute("Details").attachPatternMatched(this.onRouteMatched, this);
            },
            onNavBack: function () {
                var oHistory = History.getInstance();
                var sPreviousHash = oHistory.getPreviousHash();
            
                if (sPreviousHash !== undefined) {
                  window.history.go(-1);
                } else {
                  var oRouter = UIComponent.getRouterFor(this);
                  oRouter.navTo("Home", {}, true);
                }
              },
              onRouteMatched: function (oEvent) {
                  var sId = oEvent.getParameter("arguments").SalesOrderID;
                  var sPath = this.getView().getModel().createKey("SalesOrderSet", {
                      SalesOrderID:sId
                  });
                  this.getView().bindElement("/"+sPath);
              }
        });
    });
