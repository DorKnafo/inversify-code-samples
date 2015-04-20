/// <reference path="./interfaces.d.ts"/>

require([
    "./source/inversify.config",
    "./source/models/filter_state_model",
    "marionette",
    "localstorage"
  ],
  function (kernel : inversify.KernelInterface, FilterStateModel) {
    // Main is the application's composition root
    // The composition root is the single place in your application
    // where the composition of the object graphs for your application
    // take place, using the dependency injection container.

    debugger;

    var app = kernel.resolve<ApplicationInterface>("ApplicationInterface");

    debugger;

    // create global variable
    (<any>window).app = app;

    app.reqres.setHandler('filterState', function () {
      return new FilterStateModel();
    });

    app.on('start', function () {
      Backbone.history.start();
      app.todoListRouter.controller.start();
    });
    app.start();
});
