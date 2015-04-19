///<reference path="../../typings/tsd.d.ts" />
/// <reference path="../interfaces.d.ts"/>

class HeaderLayout extends Marionette.ItemView<any> implements HeaderLayoutInterface {

  public collection : TodoCollectionInterface;

  constructor(TodoCollectionInterface : TodoCollectionInterface /*injected*/) {
    this.collection = TodoCollectionInterface;
    this.ui = {
      input: '#new-todo'
    };
    this.events = <any> {
      'keypress @ui.input': 'onInputKeypress',
      'keyup @ui.input': 'onInputKeyup'
    };
    super();
  }

  private template(serialized_model) : string {
    var template = '', url = './templates/header_template.hbs';
    Backbone.$.ajax({
        async   : false,
        url     : url,
        success : function (templateHtml : string) {
            template = templateHtml;
        }
    });
    return _.template(template)();
  }

  public onInputKeyup(e) : void {
    var ESC_KEY = 27;

    if (e.which === ESC_KEY) {
      this.render();
    }
  }

  public onInputKeypress(e) : void {
    var ENTER_KEY = 13,
    todoText = this.ui.input.val().trim();

    if (e.which === ENTER_KEY && todoText) {
      this.collection.create({
        title: todoText
      });
      this.ui.input.val('');
    }
  }
}

export = HeaderLayout;
