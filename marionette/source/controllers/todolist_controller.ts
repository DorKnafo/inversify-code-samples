/// <reference path="../interfaces.d.ts"/>
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="localstorage"/>

class TodoListController extends Marionette.Controller implements TodoListControllerInterface {

  public todoList : TodoCollectionInterface;
  private _utils : UtilsInterface;

  constructor(
      TodoCollectionInterface : TodoCollectionInterface, //injected
      UtilsInterface : UtilsInterface                    //injected
    ) {

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
