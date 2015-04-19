///<reference path="../../typings/tsd.d.ts" />
/// <reference path="../interfaces.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function (require, exports) {
    var HeaderLayout = (function (_super) {
        __extends(HeaderLayout, _super);
        function HeaderLayout() {
            this.ui = {
                input: '#new-todo'
            };
            this.events = {
                'keypress @ui.input': 'onInputKeypress',
                'keyup @ui.input': 'onInputKeyup'
            };
            _super.call(this);
        }
        HeaderLayout.prototype.template = function (serialized_model) {
            var template = '', url = './templates/header_template.hbs';
            Backbone.$.ajax({
                async: false,
                url: url,
                success: function (templateHtml) {
                    template = templateHtml;
                }
            });
            return _.template(template)();
        };
        HeaderLayout.prototype.onInputKeyup = function (e) {
            var ESC_KEY = 27;
            if (e.which === ESC_KEY) {
                this.render();
            }
        };
        HeaderLayout.prototype.onInputKeypress = function (e) {
            var ENTER_KEY = 13, todoText = this.ui.input.val().trim();
            if (e.which === ENTER_KEY && todoText) {
                this.collection.create({
                    title: todoText
                });
                this.ui.input.val('');
            }
        };
        return HeaderLayout;
    })(Marionette.ItemView);
    return HeaderLayout;
});
