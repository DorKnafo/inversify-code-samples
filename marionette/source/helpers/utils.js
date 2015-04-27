/// <reference path="../interfaces.d.ts"/>
define(["require", "exports", "../models/filter_state_model"], function (require, exports, FilterStateModel) {
    var filterState = new FilterStateModel({});
    var Utils = (function () {
        function Utils() {
        }
        Utils.prototype.getAppFilterState = function () {
            return filterState;
        };
        return Utils;
    })();
    return Utils;
});
