/// <reference path="../interfaces.d.ts"/>

import FilterStateModel = require("../models/filter_state_model");
var filterState : FilterStateModel = new FilterStateModel({});

class Utils implements UtilsInterface {
  public getAppFilterState() {
      return filterState;
  }
}

export = Utils;
