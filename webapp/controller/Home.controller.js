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

        return Controller.extend("com.sap.o2cSD.salesorders.controller.Home", {
            formatter : Formatter,
            onInit: function () {

            },
           
            onSearch : function(oEvent) {    
            //alert("onSearchCalled") 
             var aFilters = [];
             var sQuery = oEvent.getParameter("query");
             if (sQuery) {
                 aFilters.push(new sap.ui.model.Filter("CustomerName", sap.ui.model.FilterOperator.Contains,sQuery))
             }
             var oTable = this.byId("idOrdersTable");
             var oBinding = oTable.getBinding("items");
             oBinding.filter(aFilters);
             },
             onSort : function() {
                // get the current view
                
                var oView = this.getView();
                // get frament file
                if(!this.byId("sortDialog")){
                Fragment.load({
                    id:oView.getId(),
                    name: "com.sap.o2cSD.salesorders.fragment.SortDialog",
                   controller:this
                }).then(function(oDialog){
                     //open dialog
                     oView.addDependent(oDialog);
                    oDialog.open();
                }); 
                } else {
                    this.byId("sortDialog").open();
                }
            
                 },
                     
                 onSortDialogConfirm: function(oEvent) {
                  
                   var oSortItem = oEvent.getParameter("sortItem");
                   var sColumnPath = "SalesOrderID";
                   var oDescending = oEvent.getParameter("sortDescending");
                   var aSorters = [];
                   
                   if (oSortItem){
                   sColumnPath = oSortItem.getKey();
                   }
                   aSorters.push(new Sorter(sColumnPath, oDescending));
                   var oTable = this.byId("idOrdersTable");
             var oBinding = oTable.getBinding("items");
             oBinding.sort(aSorters);
                     },
                 
             onGroup : function() {
                 // get the current view
                    
                 var oView = this.getView();
                 // get frament file
                 if(!this.byId("groupDialog")){
                 Fragment.load({
                     id:oView.getId(),
                     name: "com.sap.o2cSD.salesorders.fragment.GroupDialog",
                    controller:this
                 }).then(function(oDialog){
                      //open dialog
                      oView.addDependent(oDialog);
                     oDialog.open();
                 }); 
                 } else {
                     this.byId("groupDialog").open();
                 }
            },
            onGroupDialogConfirm: function(oEvent) {
                  
                var oSortItem = oEvent.getParameter("groupItem");
                var sColumnPath = "SalesOrderID";
                var oDescending = oEvent.getParameter("groupDescending");
                var aSorters = [];
                var bGroupEnabled = false;
                
                if (oSortItem){
                sColumnPath = oSortItem.getKey();
                bGroupEnabled = true
                }
                aSorters.push(new Sorter(sColumnPath, oDescending, bGroupEnabled));
                var oTable = this.byId("idOrdersTable");
          var oBinding = oTable.getBinding("items");
          oBinding.sort(aSorters);
                  },
                  onPressItem: function(oEvent){
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    var oItem = oEvent.getSource();

                      oRouter.navTo("Details", {
                          SalesOrderID:oItem.getBindingContext().getObject().SalesOrderID
                      });
                      
                  }
        
        });
    });
