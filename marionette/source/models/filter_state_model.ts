///<reference path="../../typings/tsd.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="localstorage"/>

class FilterStateModel extends Backbone.Model {

  public filter : string;

  constructor(/* No dendencies */) {
    this.defaults = function() {
      return {
        filter: 'all'
      }
    };
    super();
  }
}

export = FilterStateModel;
