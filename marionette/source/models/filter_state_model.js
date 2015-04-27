///<reference path="../../typings/tsd.d.ts" />
/// <amd-dependency path="marionette"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "marionette"], function (require, exports) {
    var FilterStateModel = (function (_super) {
        __extends(FilterStateModel, _super);
        function FilterStateModel(attrs) {
            this.filter = attrs['filter'] || 'all';
            _super.call(this);
        }
        FilterStateModel.prototype.initialize = function () {
            if (this.isNew()) {
                this.set('filter', 'all');
            }
        };
        return FilterStateModel;
    })(Backbone.Model);
    return FilterStateModel;
});
