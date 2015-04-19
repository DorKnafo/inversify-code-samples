///<reference path="../../typings/tsd.d.ts" />

class FilterStateModel extends Backbone.Model {

  public filter : string;

  constructor() {
    this.filter = "all";
    super();
  }
}

export = FilterStateModel;
