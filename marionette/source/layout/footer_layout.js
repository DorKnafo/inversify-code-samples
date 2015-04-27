/// <reference path="../interfaces.d.ts"/>
/// <amd-dependency path="marionette"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "marionette"], function (require, exports) {
    var FooterLayout = (function (_super) {
        __extends(FooterLayout, _super);
        function FooterLayout(TodoCollectionInterface, UtilsInterface) {
            this._utils = UtilsInterface;
            this.collection = TodoCollectionInterface;
            this.ui = {
                filters: '#filters a',
                completed: '.completed a',
                active: '.active a',
                all: '.all a',
                summary: '#todo-count',
                clear: '#clear-completed'
            };
            this.events = {
                'click @ui.clear': 'onClearClick'
            };
            this.collectionEvents = {
                'all': 'render'
            };
            this.templateHelpers = {
                activeCountLabel: function () {
                    return (this.activeCount === 1 ? 'item' : 'items') + ' left';
                }
            };
            _super.call(this);
        }
        FooterLayout.prototype.template = function (serialized_model) {
            var that = this;
            var template = '', url = './source/templates/footer.template';
            Backbone.$.ajax({
                async: false,
                url: url,
                success: function (templateHtml) {
                    template = templateHtml;
                }
            });
            return _.template(template)(serialized_model);
        };
        FooterLayout.prototype.initialize = function () {
            this.listenTo(this._utils.getAppFilterState(), 'change:filter', this.updateFilterSelection, this);
        };
        FooterLayout.prototype.serializeData = function () {
            var active = this.collection.getActive().length;
            var total = this.collection.length;
            return {
                activeCount: active,
                totalCount: total,
                completedCount: total - active
            };
        };
        FooterLayout.prototype.onRender = function () {
            this.$el.parent().toggle(this.collection.length > 0);
            this.updateFilterSelection();
        };
        FooterLayout.prototype.updateFilterSelection = function () {
            this.ui.filters.removeClass('selected');
            this.ui[this._utils.getAppFilterState().get('filter')]
                .addClass('selected');
        };
        FooterLayout.prototype.onClearClick = function () {
            var completed = this.collection.getCompleted();
            completed.forEach(function (todo) {
                todo.destroy();
            });
        };
        return FooterLayout;
    })(Marionette.ItemView);
    return FooterLayout;
});
