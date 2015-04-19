///<reference path="../../typings/tsd.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function (require, exports) {
    var TodoItemView = (function (_super) {
        __extends(TodoItemView, _super);
        function TodoItemView() {
            _super.call(this);
        }
        TodoItemView.prototype.onRender = function () {
            this.$el.removeClass('active completed');
            if (this.model.get('completed')) {
                this.$el.addClass('completed');
            }
            else {
                this.$el.addClass('active');
            }
        };
        TodoItemView.prototype.deleteModel = function () {
            this.model.destroy();
        };
        TodoItemView.prototype.toggle = function () {
            this.model.toggle().save();
        };
        TodoItemView.prototype.onEditClick = function () {
            this.$el.addClass('editing');
            this.ui.edit.focus();
            this.ui.edit.val(this.ui.edit.val());
        };
        TodoItemView.prototype.onEditFocusout = function () {
            var todoText = this.ui.edit.val().trim();
            if (todoText) {
                this.model.set('title', todoText).save();
                this.$el.removeClass('editing');
            }
            else {
                this.destroy();
            }
        };
        TodoItemView.prototype.onEditKeypress = function (e) {
            var ENTER_KEY = 13, ESC_KEY = 27;
            if (e.which === ENTER_KEY) {
                this.onEditFocusout();
                return;
            }
            if (e.which === ESC_KEY) {
                this.ui.edit.val(this.model.get('title'));
                this.$el.removeClass('editing');
            }
        };
        return TodoItemView;
    })(Marionette.ItemView);
    return TodoItemView;
});
