///<reference path="../../typings/tsd.d.ts" />
/// <amd-dependency path="marionette"/>

class TodoItemView extends Marionette.ItemView<TodoModelInterface>
                   implements TodoItemViewInterface {
  constructor() {
    this.tagName = 'li';
    this.ui = {
      edit: '.edit',
      destroy: '.destroy',
      label: 'label',
      toggle: '.toggle'
    }
    this.events = <any> {
      'click @ui.destroy': 'deleteModel',
      'dblclick @ui.label': 'onEditClick',
      'keydown @ui.edit': 'onEditKeypress',
      'focusout @ui.edit': 'onEditFocusout',
      'click @ui.toggle': 'toggle'
    };
    this.modelEvents = {
      'change': 'render'
    };
    super();
  }

  private template(serialized_model) {
    var template = '', url = './source/templates/todo_item.template';
    Backbone.$.ajax({
        async   : false,
        url     : url,
        success : function (templateHtml : string) {
            template = templateHtml;
        }
    });
    return _.template(template)(serialized_model);
  }

  public onRender() {
    this.$el.removeClass('active completed');
    if (this.model.get('completed')) {
      this.$el.addClass('completed');
    } else {
      this.$el.addClass('active');
    }
  }

  public deleteModel() {
    this.model.destroy();
  }

  public toggle() {
    var item = this.model.toggle();
    item.save();
  }

  public onEditClick() {
    this.$el.addClass('editing');
    this.ui.edit.focus();
    this.ui.edit.val(this.ui.edit.val());
  }

  public onEditFocusout() {
    var todoText = this.ui.edit.val().trim();
    if (todoText) {
      this.model.set('title', todoText).save();
      this.$el.removeClass('editing');
    } else {
      this.destroy();
    }
  }

  public onEditKeypress(e) {
    var ENTER_KEY = 13, ESC_KEY = 27;

    if (e.which === ENTER_KEY) {
      this.onEditFocusout();
      return;
    }

    if (e.which === ESC_KEY) {
      this.ui.edit.val(this.model.get('title'));
      this.$el.removeClass('editing');
    }
  }
}

export = TodoItemView;
