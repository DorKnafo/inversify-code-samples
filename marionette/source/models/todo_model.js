///<reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function (require, exports) {
    var TodoModel = (function (_super) {
        __extends(TodoModel, _super);
        function TodoModel() {
            this.defaults = function () {
                return {
                    title: '',
                    completed: false,
                    created: 0
                };
            };
            _super.call(this);
        }
        TodoModel.prototype.initialize = function () {
            if (this.isNew()) {
                this.set('created', Date.now());
            }
        };
        TodoModel.prototype.toggle = function () {
            return this.set('completed', !this.isCompleted());
        };
        TodoModel.prototype.isCompleted = function () {
            return this.get('completed');
        };
        TodoModel.prototype.matchesFilter = function (filter) {
            if (filter === 'all') {
                return true;
            }
            if (filter === 'active') {
                return !this.isCompleted();
            }
            return this.isCompleted();
        };
        return TodoModel;
    })(Backbone.Model);
    return TodoModel;
});
