/// <reference path="../interfaces.d.ts"/>
/// <amd-dependency path="marionette"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "marionette"], function (require, exports) {
    var RootLayout = (function (_super) {
        __extends(RootLayout, _super);
        function RootLayout(HeaderLayoutInterface, FooterLayoutInterface, TodoListViewInterface) {
            _super.call(this);
            this.el = "#todoapp";
            this.addRegions({ header: "#header" });
            this.addRegions({ main: "#main" });
            this.addRegions({ footer: "#footer" });
            this.showChildView('header', HeaderLayoutInterface);
            this.showChildView('footer', FooterLayoutInterface);
            this.showChildView('main', TodoListViewInterface);
        }
        return RootLayout;
    })(Marionette.LayoutView);
    return RootLayout;
});
