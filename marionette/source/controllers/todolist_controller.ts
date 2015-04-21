/// <reference path="../interfaces.d.ts"/>
/// <amd-dependency path="marionette"/>

class TodoListController extends Marionette.Controller implements TodoListControllerInterface {

  public todoList : TodoCollectionInterface;
  private _utils : UtilsInterface;

  constructor(
      TodoCollectionInterface : TodoCollectionInterface, //injected
      UtilsInterface : UtilsInterface                    //injected
    ) {
      this._utils = UtilsInterface;
      this.todoList = TodoCollectionInterface;
      super();
  }

  public start () : void {
    this.todoList.fetch();
  }

  public filterItems(filter : string) : void {
    var newFilter = filter && filter.trim() || 'all';
    this._utils.getAppFilterState().set('filter', newFilter);
  }
}

export = TodoListController;
