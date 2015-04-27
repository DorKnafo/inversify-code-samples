/// <reference path="./interfaces.d.ts"/>
require([
    "./source/inversify.config",
    "./source/models/filter_state_model",
    "marionette",
    "localstorage"
], function (kernel, FilterStateModel) {
    var app = kernel.resolve("ApplicationInterface");
    app.on('start', function () {
        Backbone.history.start();
        app.todoListRouter.controller.start();
    });
    app.start();
});
