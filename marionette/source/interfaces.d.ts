///<reference path="../typings/tsd.d.ts" />

// application
interface ApplicationInterface extends Marionette.Application {}

// layout
interface RootLayoutInterface extends Marionette.LayoutView<any> {}
interface HeaderLayoutInterface extends Marionette.ItemView<any> {}
interface FooterLayoutInterface extends Marionette.ItemView<any> {}

// controllers
interface TodoListControllerInterface extends Marionette.Controller {}

// collections
interface TodoCollectionInterface extends Backbone.Collection<TodoModelInterface> {}

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
