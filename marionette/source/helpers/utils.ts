/// <reference path="../interfaces.d.ts"/>

import FilterStateModel = require("../models/filter_state_model");

class Utils implements UtilsInterface {
  public getAppFilterState() {
      return new FilterStateModel();
  }
  constructor(/* no dependencies*/) {}
}

export = Utils;
