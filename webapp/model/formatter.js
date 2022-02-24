sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function () {
	"use strict";

	return {
        formatStatus: function(sValue) {
            switch (sValue) {
                case "C":
                    return sap.ui.core.ValueState.Success ;
                case "P":
                    return sap.ui.core.ValueState.Warning;
                case "X":
                return sap.ui.core.ValueState.Error;
                 default:
                 return sap.ui.core.ValueState.Information;
            }
        },
		statusIndicator: function(sStatus) {
            var sIcon;

            switch (sStatus) {
                case "C":
                    sIcon ="completed" ;
                    break;
                case "P":
                    sIcon ="in-process" ;
                    break;
                case "X":
                    sIcon ="error" ;
                    break;
                 default:
                 sIcon ="inactive" ;
                 break;
            }
            return "sap-icom://status-" + sIcon;
            //return "sap-icon://status-completed";
        }

	};
});