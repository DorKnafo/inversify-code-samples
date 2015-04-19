///<reference path="../../typings/tsd.d.ts" />

class TodoItemView extends Marionette.ItemView<TodoModelInterface> {
  public model : TodoModelInterface;
  constructor() {
    /*
    tagName: 'li',
    template: '#template-todoItemView',
    ui: {
      edit: '.edit',
      destroy: '.destroy',
      label: 'label',
      toggle: '.toggle'
    }
    events: {
      'click @ui.destroy': 'deleteModel',
      'dblclick @ui.label': 'onEditClick',
      'keydown @ui.edit': 'onEditKeypress',
      'focusout @ui.edit': 'onEditFocusout',
      'click @ui.toggle': 'toggle'
    }
    modelEvents: {
      'change': 'render'
    }
    */
    super();
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
    this.model.toggle().save();
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
