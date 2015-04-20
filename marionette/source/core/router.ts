/// <reference path="../interfaces.d.ts"/>
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="localstorage"/>

class Router extends Marionette.AppRouter implements TodoListRouterInterface{

  public controller : TodoListControllerInterface;
  public appRoutes : any;

  constructor(TodoListControllerInterface : TodoListControllerInterface) {
    this.controller = TodoListControllerInterface;
    this.appRoutes = {
        '*filter': 'filterItems'
    };
    super();
  }

  public start() {
    this.controller.start();
  }
}

export = Router;
