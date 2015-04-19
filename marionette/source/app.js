/// <reference path="./interfaces.d.ts"/>
/// <amd-dependency path="marionette"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "./inversify.config", "marionette"], function (require, exports, kernel) {
    var App = (function (_super) {
        __extends(App, _super);
        function App(RootLayoutInterface, TodoListControllerInterface) {
            _super.call(this);
            this.root = RootLayoutInterface;
            this.todoListController = TodoListControllerInterface;
        }
        return App;
    })(Marionette.Application);
    var filterState = new Backbone.Model({
        filter: 'all'
    });
    app.reqres.setHandler('filterState', function () {
        return filterState;
    });
    App.on('start', function () {
        TodoMVC.setRootLayout();
        Backbone.history.start();
        var controller = new TodoListController();
        controller.router = new TodoListRouter({
            controller: controller
        });
        controller.start();
    });
    var app = kernel.resolve("ApplicationInterface");
    return app;
});
