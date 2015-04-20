# Backbone.Marionette InversifyJS Example

#### About Marionette

> Backbone.Marionette is a composite application library for Backbone.js that aims to simplify the construction of large scale JavaScript applications.

> _[Backbone.Marionette - marionettejs.com](http://marionettejs.com)_

#### About InversifyJS

> InversifyJS is a lightweight (4KB) pico inversion of control (IoC) container for TypeScript and JavaScript apps. A pico IoC container uses a class constructor to identify and inject its dependencies.

> InversifyJS is easy to integrate with the majority of existing JavaScript frameworks and encourage the usage of the best OOP and IoC practices.

> _[InversifyJS - inversify.io](http://inversify.io)_

This example is based on the [TodoMVC marionette example](https://github.com/tastejs/todomvc/tree/gh-pages/examples/backbone_marionette)

## Implementation
This implementation uses [requirejs](http://requirejs.org/) as module loader. Each of the application's components is declared on and independent file under
the `source` directory.

The file `source/main.ts` is the application's `composition root`. The composition root is the single place in the application where the composition of the object
graphs for the application take place, using the dependency injection container. It is the only place where we will invoke the IoC container's `resolve` method.
Invoking  resolve in any other place is an anti-pattern (read the [InversifyJS good practices](http://inversify.io/#good_practices) for more details).

In order to resolve a dependency we must first declare a type binding. A type binding (or just a binding) is a mapping between a service type (an interface), and
an implementation type (a class) to be used to satisfy such a service requirement.

- The application service types (interfaces) are declared at `source/interfaces.d.ts`.
- The implementation types (classes) are declared in files and folders under the `source` directory.
- The bindings are declared under the `source/inversify.config.ts`.

This file imports each of the implementation types (classes) in the application. So, if we know that a class has a dependency on a service type (interface) and we want to find where is located its implementation type (class) `source/inversify.config.ts` is a good place to start searching for it.

One we have declared all the bindings we invoke the resolve method (in `source/main.ts`):

```
var app = kernel.resolve<ApplicationInterface>("ApplicationInterface");
```
The IoC container will then try to create an instance of the type binded to `ApplicationInterface` which is the `Application` class. The `Application` class
has some dependencies that will be resolved and injected via its constructor. If those dependencies has some dependencies they will be resolved an injected as well.

The application dependency tree look as follows:

![dependency_tree](https://raw.githubusercontent.com/remojansen/inversify-code-samples/master/marionette/img/dependency_tree.png)

## Learning Backbone.Marionette

The [Backbone.Marionette website](http://marionettejs.com) is a great resource for getting started.

Here are some links you may find helpful:

* [API Reference](https://github.com/marionettejs/backbone.marionette/tree/master/docs)
* [Applications built with Backbone.Marionette](https://github.com/marionettejs/backbone.marionette/wiki/Projects-and-websites-using-marionette)
* [Introduction to Composite JavaScript Apps](https://github.com/marionettejs/backbone.marionette/wiki/Introduction-to-composite-javascript-apps)
* [FAQ](https://github.com/marionettejs/backbone.marionette/wiki#frequently-asked-questions)
* [Backbone.Marionette on GitHub](https://github.com/marionettejs/backbone.marionette)

Articles and guides from the community:

* [A Thorough Introduction to Backbone.Marionette](http://coding.smashingmagazine.com/2013/02/11/introduction-backbone-marionette)
* [Backbone Marionette: Better Backbone Apps](http://www.joezimjs.com/javascript/backbone-marionette-better-backbone-apps)

Get help from other Backbone.Marionette users:

* [Backbone.Marionette on StackOverflow](http://stackoverflow.com/questions/tagged/backbone.marionette)
* [Backbone.Marionette on Twitter](http://twitter.com/marionettejs)

_If you have other helpful links to share, or find any of the links above no longer work, please [let us know](https://github.com/inversify/inversify-code-samples/issues)._
