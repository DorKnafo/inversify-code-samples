/// <reference path="./interfaces.d.ts"/>


class Router extends Marionette.AppRouter {
  private controller : TodoListControllerInterface;
  constructor(TodoListControllerInterface) {
    this.controller = TodoListControllerInterface;
    this.super.appRoutes = {
        '*filter': 'filterItems'
    };
    super();
  }
}

export = Router;
