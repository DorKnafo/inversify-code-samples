/// <reference path="./interfaces.d.ts"/>
/// <amd-dependency path="marionette"/>

//import RootLayout = require("./layout/root_layout");

import kernel = require("./inversify.config");

class App extends Marionette.Application implements ApplicationInterface{
  public root : RootLayoutInterface;
  public todoListController : TodoListControllerInterface;
  constructor(
      RootLayoutInterface : RootLayoutInterface,                // injected
      TodoListControllerInterface : TodoListControllerInterface // injected
    ) {
      
      super();
      this.root = RootLayoutInterface;
      this.todoListController = TodoListControllerInterface;
  }
}

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

var app = kernel.resolve<ApplicationInterface>("ApplicationInterface");

//var app = new App();

export =  app;
