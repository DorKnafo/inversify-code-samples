/// <reference path="../interfaces.d.ts"/>

import app = require("../app");

class TodoListController extends Marionette.Controller implements TodoListControllerInterface {
  public todoList : TodoListCollection;

  constructor(TodoListCollection) {
    this.todoList = TodoListCollection;
    super();
  }
  start () {
    //this.showHeader(this.todoList);
    //this.showFooter(this.todoList);
    //this.showTodoList(this.todoList);
    this.todoList.fetch();
  }
  filterItems(filter) {
    var newFilter = filter && filter.trim() || 'all';
    app.request('filterState').set('filter', newFilter);
  }
}

export = TodoListController;
