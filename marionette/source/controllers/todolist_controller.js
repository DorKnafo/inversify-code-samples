/// <reference path="../interfaces.d.ts"/>
/// <amd-dependency path="marionette"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "marionette"], function (require, exports) {
    var TodoListController = (function (_super) {
        __extends(TodoListController, _super);
        function TodoListController(TodoCollectionInterface, UtilsInterface) {
            this._utils = UtilsInterface;
            this.todoList = TodoCollectionInterface;
            _super.call(this);
        }
        TodoListController.prototype.start = function () {
            this.todoList.fetch();
        };
        TodoListController.prototype.filterItems = function (filter) {
            var newFilter = filter && filter.trim() || 'all';
            this._utils.getAppFilterState().set('filter', newFilter);
        };
        return TodoListController;
    })(Marionette.Controller);
    return TodoListController;
});
