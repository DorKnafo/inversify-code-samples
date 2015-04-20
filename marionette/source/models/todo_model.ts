///<reference path="../../typings/tsd.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="localstorage"/>

class TodoModel extends Backbone.Model implements TodoModelInterface {
  public created : number;
  public completed : boolean;
  public title : string;
  constructor(/* No dendencies */) {
    this.defaults = function() {
      return {
        title: '',
        completed : false,
        created : 0
      }
    };
    super();
  }
  public initialize() {
    if (this.isNew()) {
      this.set('created', Date.now());
    }
  }
  public toggle() : TodoModelInterface {
    return <TodoModelInterface>this.set('completed', !this.isCompleted());
  }
  public isCompleted() : boolean {
    return this.get('completed');
  }
  public matchesFilter(filter) : boolean {
    if (filter === 'all') {
      return true;
    }
    if (filter === 'active') {
      return !this.isCompleted();
    }
    return this.isCompleted();
  }
}

export = TodoModel;
