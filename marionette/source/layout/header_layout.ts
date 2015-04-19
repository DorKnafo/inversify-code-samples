///<reference path="../../typings/tsd.d.ts" />
/// <reference path="../interfaces.d.ts"/>

class HeaderLayout extends Marionette.ItemView<any> implements HeaderLayoutInterface{
  constructor() {
    // UI bindings create cached attributes that
    // point to jQuery selected objects
    this.ui = {
      input: '#new-todo'
    };
    this.events = <any> {
      'keypress @ui.input': 'onInputKeypress',
      'keyup @ui.input': 'onInputKeyup'
    };
    super();
  }
  private template(serialized_model) {
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
  // According to the spec, If escape is pressed during the edit,
  // the edit state should be left and any changes be discarded.
  public onInputKeyup(e) {
    var ESC_KEY = 27;

    if (e.which === ESC_KEY) {
      this.render();
    }
  }
  public onInputKeypress(e) {
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
