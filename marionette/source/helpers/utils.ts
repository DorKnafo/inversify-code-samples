/// <reference path="../interfaces.d.ts"/>

import FilterStateModel = require("../models/filter_state_model");

class Utils implements UtilsInterface {
  public getAppFilterState() {
    // temporal solution
    if(typeof (<any>window).app === "undefined") {
      return new FilterStateModel();
    }
    else {
      return (<any>window).app.request('filterState');
    }
  }
  constructor(/* no dependencies*/) {}
}

export = Utils;
