///<reference path="../../typings/tsd.d.ts" />
/// <amd-dependency path="marionette"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "marionette"], function (require, exports) {
    var TodoModel = (function (_super) {
        __extends(TodoModel, _super);
        function TodoModel(attrs) {
            this.created = attrs['created'] || Date.now();
            this.completed = attrs['completed'] || false;
            this.title = attrs['title'] || '';
            _super.call(this);
        }
        TodoModel.prototype.initialize = function () {
            if (this.isNew()) {
                this.set('created', this.created);
                this.set('completed', this.completed);
                this.set('title', this.title);
            }
        };
        TodoModel.prototype.toggle = function () {
            var model = this.set('completed', !this.isCompleted());
            return model;
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
