/// <reference path="../interfaces.d.ts"/>
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="localstorage"/>

class Application extends Marionette.Application implements ApplicationInterface{

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

export = Application;
