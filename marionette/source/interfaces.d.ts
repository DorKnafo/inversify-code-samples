///<reference path="../typings/tsd.d.ts" />

//******************************************************************************
//* NOT INJECTED
//******************************************************************************
// application
interface ApplicationInterface extends Marionette.Application {
  root : RootLayoutInterface;
  todoListRouter : TodoListRouterInterface;
}

// models
interface TodoModelInterface extends Backbone.Model {
  created : number;
  completed : boolean;
  title : string;
  toggle() : TodoModelInterface;
  isCompleted() : boolean;
  matchesFilter(filter) : boolean;
}

// views
interface TodoItemViewInterface extends Marionette.ItemView<TodoModelInterface> {}

//******************************************************************************
//* INJECTED
//******************************************************************************
// layout
interface RootLayoutInterface extends Marionette.LayoutView<any> {}
interface HeaderLayoutInterface extends Marionette.ItemView<any> {}
interface FooterLayoutInterface extends Marionette.ItemView<any> {}

// routes
interface TodoListRouterInterface extends Marionette.AppRouter {
  controller : TodoListControllerInterface;
}

// controllers
interface TodoListControllerInterface extends Marionette.Controller {
  start() : void;
}

// collections
interface TodoCollectionInterface extends Backbone.Collection<TodoModelInterface> {
  getCompleted() : TodoModelInterface[];
  getActive() : TodoModelInterface[];
}

// collection views
interface TodoListViewInterface extends Marionette.CompositeView<TodoModelInterface> {}

// others
interface UtilsInterface {
  getAppFilterState() : any;
}
