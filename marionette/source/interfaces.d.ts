///<reference path="../typings/tsd.d.ts" />

// application
interface ApplicationInterface extends Marionette.Application {
  root : RootLayoutInterface;
  todoListRouter : TodoListRouterInterface;
}

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

// models
interface TodoModelInterface extends Backbone.Model {
  created : number;
  completed : boolean;
  title : string;
  toggle() : TodoModelInterface;
  isCompleted() : boolean;
  matchesFilter(filter) : boolean;
}

// collection views
interface TodoListViewInterface extends Marionette.CompositeView<TodoModelInterface> {}

// views
interface TodoItemViewInterface extends Marionette.ItemView<TodoModelInterface> {}

// others
interface UtilsInterface {
  getAppFilterState() : any;
}
