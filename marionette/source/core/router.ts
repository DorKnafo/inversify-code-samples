/// <reference path="../interfaces.d.ts"/>

class Router extends Marionette.AppRouter implements TodoListRouterInterface{

  public controller : TodoListControllerInterface;

  constructor(TodoListControllerInterface : TodoListControllerInterface) {
    this.controller = TodoListControllerInterface;

    //this.appRoutes = {
    //    '*filter': 'filterItems'
    //};
    super();
  }

  public start() {
    this.controller.start();
  }
}

export = Router;
