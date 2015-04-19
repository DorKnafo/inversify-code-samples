/// <reference path="../interfaces.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../models/todo_model"], function (require, exports, TodoModel) {
    var TodoCollection = (function (_super) {
        __extends(TodoCollection, _super);
        function TodoCollection() {
            this.model = TodoModel;
            this.localStorage = new Backbone.LocalStorage('todos-backbone-marionette');
            _super.call(this);
        }
        TodoCollection.prototype.comparator = function (compare, to) {
            if (typeof to === "undefined") {
                return compare.created;
            }
            else {
                if (compare.created > to.created) {
                    return compare.created;
                }
                else {
                    to.created;
                }
                ;
            }
        };
        TodoCollection.prototype.getCompleted = function () {
            return this.filter(this._isCompleted);
        };
        TodoCollection.prototype.getActive = function () {
            return this.reject(this._isCompleted);
        };
        TodoCollection.prototype._isCompleted = function (todo) {
            return todo.isCompleted();
        };
        return TodoCollection;
    })(Backbone.Collection);
});
