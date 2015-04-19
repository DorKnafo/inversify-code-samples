/// <reference path="./interfaces.d.ts"/>

import RootLayout = require("./layout/root_layout");
import HeaderLayout = require("./layout/root_layout");
import FooterLayout = require("./layout/root_layout");
import TodoCollection = require("./collections/todo_collection");

var kernel : inversify.KernelInterface = new inversify.Kernel();

// bindings
kernel.bind(new inversify.TypeBinding<RootLayoutInterface>("RootLayoutInterface", RootLayout));
kernel.bind(new inversify.TypeBinding<HeaderLayoutInterface>("HeaderLayoutInterface", HeaderLayout));
kernel.bind(new inversify.TypeBinding<RootLayoutInterface>("FooterLayoutInterface", FooterLayout));

kernel.bind(
  new inversify.TypeBinding<TodoCollectionInterface>(
    "TodoCollectionInterface",
    TodoCollection,
    inversify.TypeBindingScopeEnum.Singleton)
);

export = kernel;
