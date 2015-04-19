/// <reference path="./interfaces.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function (require, exports) {
    var Router = (function (_super) {
        __extends(Router, _super);
        function Router(TodoListControllerInterface) {
            this.controller = TodoListControllerInterface;
            this.super.appRoutes = {
                '*filter': 'filterItems'
            };
            _super.call(this);
        }
        return Router;
    })(Marionette.AppRouter);
    return Router;
});
