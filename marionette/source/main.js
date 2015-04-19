/// <reference path="./interfaces.d.ts"/>
require([
    "./inversify.config",
    "backbone",
    "localstorage",
    "marionette"
], function (kernel) {
    var app = kernel.resolve("ApplicationInterface");
    app.start();
});
