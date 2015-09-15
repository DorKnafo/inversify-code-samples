/// <reference path="./interfaces.d.ts"/>
/// <amd-dependency path="inversify" name="inversify"/>

import RootLayout         = require("./layout/root_layout");
import HeaderLayout       = require("./layout/header_layout");
import FooterLayout       = require("./layout/footer_layout");
import TodoCollection     = require("./collections/todo_collection");
import TodoListController = require("./controllers/todolist_controller");
import TodoListView       = require("./views/todo_list_view");
import TodoListRouter     = require("./core/router");
import Utils              = require("./helpers/utils");
import Application        = require("./core/app");

var kernel : inversify.KernelInterface = new inversify.Kernel();

// bindings
kernel.bind(new inversify.TypeBinding<ApplicationInterface>("ApplicationInterface", Application));
kernel.bind(new inversify.TypeBinding<RootLayoutInterface>("RootLayoutInterface", RootLayout));
kernel.bind(new inversify.TypeBinding<HeaderLayoutInterface>("HeaderLayoutInterface", HeaderLayout));
kernel.bind(new inversify.TypeBinding<FooterLayoutInterface>("FooterLayoutInterface", FooterLayout));
kernel.bind(new inversify.TypeBinding<TodoListControllerInterface>("TodoListControllerInterface", TodoListController));
kernel.bind(new inversify.TypeBinding<TodoListViewInterface>("TodoListViewInterface", TodoListView));
kernel.bind(new inversify.TypeBinding<TodoListRouterInterface>("TodoListRouterInterface", TodoListRouter));
kernel.bind(new inversify.TypeBinding<UtilsInterface>("UtilsInterface", Utils));

kernel.bind(new inversify.TypeBinding<TodoCollectionInterface>("TodoCollectionInterface",
  TodoCollection,
  inversify.TypeBindingScopeEnum.Singleton
));

export = kernel;
