/// <reference path="../interfaces.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function (require, exports) {
    var TodoListView = (function (_super) {
        __extends(TodoListView, _super);
        function TodoListView() {
            _super.call(this);
            this.template = '#template-todoListCompositeView';
            this.childViewContainer = '#todo-list';
        }
        TodoListView.prototype.initialize = function () {
            this.listenTo(App.request('filterState'), 'change:filter', this.render, this);
        };
        TodoListView.prototype.addChild = function (child) {
            var filteredOn = App.request('filterState').get('filter');
            if (child.matchesFilter(filteredOn)) {
                Backbone.Marionette.CompositeView.prototype.addChild.apply(this, arguments);
            }
        };
        TodoListView.prototype.onRender = function () {
            this.update();
        };
        TodoListView.prototype.update = function () {
            function reduceCompleted(left, right) {
                return left && right.get('completed');
            }
            var allCompleted = this.collection.reduce(reduceCompleted, true);
            this.ui.toggle.prop('checked', allCompleted);
            this.$el.parent().toggle(!!this.collection.length);
        };
        TodoListView.prototype.onToggleAllClick = function (e) {
            var isChecked = e.currentTarget.checked;
            this.collection.each(function (todo) {
                todo.save({ 'completed': isChecked });
            });
        };
        return TodoListView;
    })(Marionette.CompositeView);
    return TodoListView;
});
