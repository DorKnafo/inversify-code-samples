///<reference path="../../typings/tsd.d.ts" />
/// <amd-dependency path="marionette"/>

class FilterStateModel extends Backbone.Model implements FilterStateModelInterface {

  public filter : string;

  constructor(attrs?) {
    this.filter = attrs['filter'] || 'all';
    super();
  }

  public initialize() {
    if(this.isNew()){
      this.set('filter', 'all');
    }
  }
}

export = FilterStateModel;
