///<reference path="../../typings/tsd.d.ts" />
/// <amd-dependency path="marionette"/>

class TodoModel extends Backbone.Model implements TodoModelInterface {

  public created : number;
  public completed : boolean;
  public title : string;

  constructor(attrs) {
    this.created = attrs['created'] || Date.now();
    this.completed = attrs['completed'] || false;
    this.title = attrs['title'] || '';
    super();
  }

  public initialize() {
    if(this.isNew()){
      this.set('created', this.created);
      this.set('completed', this.completed);
      this.set('title', this.title);
    }
  }

  public toggle() : TodoModelInterface {
    debugger;
    var model = <TodoModelInterface>this.set('completed', !this.isCompleted());
    return model;
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
