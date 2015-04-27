/// <reference path="../interfaces.d.ts"/>
/// <amd-dependency path="marionette"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "./todo_item_view", "marionette"], function (require, exports, TodoItemView) {
    var TodoListView = (function (_super) {
        __extends(TodoListView, _super);
        function TodoListView(TodoCollectionInterface, UtilsInterface) {
            this._utils = UtilsInterface;
            this.collection = TodoCollectionInterface;
            this.childView = TodoItemView;
            this.childViewContainer = '#todo-list';
            this.ui = {
                toggle: '#toggle-all'
            };
            this.events = {
                'click @ui.toggle': 'onToggleAllClick'
            };
            this.collectionEvents = {
                'all': 'update'
            };
            _super.call(this);
        }
        TodoListView.prototype.template = function (serialized_model) {
            var template = '', url = './source/templates/todo_list.template';
            Backbone.$.ajax({
                async: false,
                url: url,
                success: function (templateHtml) {
                    template = templateHtml;
                }
            });
            return _.template(template)(serialized_model);
        };
        TodoListView.prototype.initialize = function () {
            this.listenTo(this._utils.getAppFilterState(), 'change:filter', this.render, this);
        };
        TodoListView.prototype.buildChildView = function (child, ChildViewClass, childViewOptions) {
            var options = _.extend({ model: child }, childViewOptions);
            var view = new ChildViewClass();
            view.model = options.model;
            return view;
        };
        TodoListView.prototype.addChild = function (child) {
            var filteredOn = this._utils.getAppFilterState().get('filter');
            if (child.matchesFilter(filteredOn)) {
                Marionette.CompositeView.prototype.addChild.apply(this, arguments);
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
