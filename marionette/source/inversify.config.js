/// <reference path="./interfaces.d.ts"/>
define(["require", "exports", "./layout/root_layout", "./layout/root_layout", "./layout/root_layout", "./collections/todo_collection"], function (require, exports, RootLayout, HeaderLayout, FooterLayout, TodoCollection) {
    var kernel = new inversify.Kernel();
    kernel.bind(new inversify.TypeBinding("RootLayoutInterface", RootLayout));
    kernel.bind(new inversify.TypeBinding("HeaderLayoutInterface", HeaderLayout));
    kernel.bind(new inversify.TypeBinding("FooterLayoutInterface", FooterLayout));
    kernel.bind(new inversify.TypeBinding("TodoCollectionInterface", TodoCollection, inversify.TypeBindingScopeEnum.Singleton));
    return kernel;
});
