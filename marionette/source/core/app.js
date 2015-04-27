/// <reference path="../interfaces.d.ts"/>
/// <amd-dependency path="marionette"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "marionette"], function (require, exports) {
    var Application = (function (_super) {
        __extends(Application, _super);
        function Application(RootLayoutInterface, TodoListRouterInterface) {
            _super.call(this);
            this.root = RootLayoutInterface;
            this.todoListRouter = TodoListRouterInterface;
        }
        return Application;
    })(Marionette.Application);
    return Application;
});
