/// <reference path="../interfaces.d.ts"/>
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="localstorage"/>

import kernel = require("../inversify.config");
import FilterStateModel = require("../models/filter_state_model");

class App extends Marionette.Application implements ApplicationInterface{

  public root : RootLayoutInterface;
  public todoListRouter : TodoListRouterInterface;

  constructor(
      RootLayoutInterface : RootLayoutInterface,        // injected
      TodoListRouterInterface : TodoListRouterInterface // injected
    ) {

      super();
      this.root = RootLayoutInterface;
      this.todoListRouter = TodoListRouterInterface;
  }
}

var app = kernel.resolve<ApplicationInterface>("ApplicationInterface");

app.reqres.setHandler('filterState', function () {
  return new FilterStateModel();
});

app.on('start', function () {
  Backbone.history.start();
  app.todoListRouter.controller.start();
});

export =  app;
