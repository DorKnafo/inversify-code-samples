/// <reference path="../interfaces.d.ts"/>
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="localstorage"/>

class RootLayout extends Marionette.LayoutView<any> implements RootLayoutInterface {

  public header : HeaderLayoutInterface;
  public main : FooterLayoutInterface;
  public footer : TodoListViewInterface;

  constructor(
      HeaderLayoutInterface : HeaderLayoutInterface, // injected
      FooterLayoutInterface : FooterLayoutInterface, // injected
      TodoListViewInterface : TodoListViewInterface  // injected
    ) {

      super();
      this.el = "#todoapp";

      this.addRegions({ header : "#header" });
      this.addRegions({ main : "#main" });
      this.addRegions({ footer : "#footer" });

      // Type definion file seems to be mising showChildView
      // using (<any>this) until is updaed
      (<any>this).showChildView('header', HeaderLayoutInterface);
      (<any>this).showChildView('footer', FooterLayoutInterface);
      (<any>this).showChildView('main', TodoListViewInterface);
  }
}

export = RootLayout;
