/// <reference path="../interfaces.d.ts"/>

import TodoModel = require("../models/todo_model");

class TodoCollection extends Backbone.Collection<TodoModelInterface>
                         implements TodoCollectionInterface {

  public model : { new() : TodoModelInterface};
  public localStorage : any;
  constructor() {
    this.model = TodoModel;
    this.localStorage = new (<any>Backbone).LocalStorage('todos-backbone-marionette');
    super();
  }
  comparator(compare : TodoModelInterface, to? : TodoModelInterface) : number {
    if(typeof to === "undefined") {
      return compare.created; // compare.created;
    }
    else {
      if(compare.created > to.created) {
        return compare.created;
      }
      else {
        to.created
      };
    }
  }
  getCompleted() {
    return this.filter(this._isCompleted);
  }
  getActive() {
    return this.reject(this._isCompleted);
  }
  _isCompleted(todo) {
    return todo.isCompleted();
  }
}

export = TodoListCollection;
