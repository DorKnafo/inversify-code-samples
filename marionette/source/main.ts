/// <reference path="./interfaces.d.ts"/>

require([
    "./inversify.config",
    "backbone",
    "localstorage",
    "marionette"
  ],
  function (kernel : inversify.Kernel) {
    var app = kernel.resolve<ApplicationInterface>("ApplicationInterface");

    

    app.start();
});
