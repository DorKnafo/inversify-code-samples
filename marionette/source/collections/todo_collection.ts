/// <reference path="../interfaces.d.ts"/>
/// <amd-dependency path="backbone"/>
/// <amd-dependency path="localstorage"/>

import TodoModel = require("../models/todo_model");

class TodoCollection extends Backbone.Collection<TodoModelInterface>
                         implements TodoCollectionInterface {

  public model : any;
  public localStorage : any;

  constructor(/* No dendencies */) {
    this.model = TodoModel;
    (<any>this).comparator = 'created';
    this.localStorage = new (<any>Backbone).LocalStorage('todos-backbone-marionette');
    super();
  }

  public getCompleted() : TodoModelInterface[] {
    return this.filter(this._isCompleted);
  }

  public getActive() : TodoModelInterface[] {
    return this.reject(this._isCompleted);
  }

  private _isCompleted(todo : TodoModelInterface) : boolean {
    return todo.isCompleted();
  }
}

export = TodoCollection;
