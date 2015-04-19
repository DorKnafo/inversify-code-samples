/// <reference path="../interfaces.d.ts"/>

class Utils implements UtilsInterface {
  public getAppFilterState() {
    return App.request('filterState');
  }
}
