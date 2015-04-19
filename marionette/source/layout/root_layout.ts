/// <reference path="../interfaces.d.ts"/>

class RootLayout extends Marionette.LayoutView<any> implements RootLayoutInterface {
  
  public header : Marionette.Region;
  public main : Marionette.Region;
  public footer : Marionette.Region;

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

      this.showChildView('header', HeaderLayoutInterface);
      this.showChildView('footer', FooterLayoutInterface);
      this.showChildView('main', TodoListViewInterface);
  }
}

export = RootLayout;
