/// <reference path="./interfaces.d.ts"/>
/// <amd-dependency path="inversify" name="inversify"/>
define(["require", "exports", "./layout/root_layout", "./layout/header_layout", "./layout/footer_layout", "./collections/todo_collection", "./controllers/todolist_controller", "./views/todo_list_view", "./core/router", "./helpers/utils", "./core/app", "inversify"], function (require, exports, RootLayout, HeaderLayout, FooterLayout, TodoCollection, TodoListController, TodoListView, TodoListRouter, Utils, Application, inversify) {
    var kernel = new inversify.Kernel();
    kernel.bind(new inversify.TypeBinding("ApplicationInterface", Application));
    kernel.bind(new inversify.TypeBinding("RootLayoutInterface", RootLayout));
    kernel.bind(new inversify.TypeBinding("HeaderLayoutInterface", HeaderLayout));
    kernel.bind(new inversify.TypeBinding("FooterLayoutInterface", FooterLayout));
    kernel.bind(new inversify.TypeBinding("TodoCollectionInterface", TodoCollection, inversify.TypeBindingScopeEnum.Singleton));
    kernel.bind(new inversify.TypeBinding("TodoListControllerInterface", TodoListController));
    kernel.bind(new inversify.TypeBinding("TodoListViewInterface", TodoListView));
    kernel.bind(new inversify.TypeBinding("TodoListRouterInterface", TodoListRouter));
    kernel.bind(new inversify.TypeBinding("UtilsInterface", Utils));
    return kernel;
});
