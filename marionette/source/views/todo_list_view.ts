/// <reference path="../interfaces.d.ts"/>
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="localstorage"/>

import TodoItemView = require("./todo_item_view");

class TodoListView extends Marionette.CompositeView<TodoModelInterface>
                    implements TodoListViewInterface {

  private _utils : UtilsInterface;
  public collection : TodoCollectionInterface;

  constructor(
      TodoCollectionInterface : TodoCollectionInterface, // injected
      UtilsInterface : UtilsInterface                    //injected
    ) {

      this._utils = UtilsInterface;
      this.collection = TodoCollectionInterface;
      this.childView = TodoItemView;
      this.childViewContainer = '#todo-list';
      this.ui = {
        toggle: '#toggle-all'
      }
      this.events = <any> {
        'click @ui.toggle': 'onToggleAllClick'
      }
      this.collectionEvents = {
        'all': 'update'
      }
      super();
  }

  private template(serialized_model) {
    var template = '', url = './source/templates/todo_list.template';
    Backbone.$.ajax({
        async   : false,
        url     : url,
        success : function (templateHtml : string) {
            template = templateHtml;
        }
    });
    return _.template(template)(serialized_model);
  }

  public initialize() {
    this.listenTo(this._utils.getAppFilterState(), 'change:filter', this.render);
  }

  public buildChildView(child, ChildViewClass, childViewOptions) {
    var options = _.extend({model: child}, childViewOptions);
    // Create the child view (TodoItemView) instance
    // If the child view has dependencies we will have to resolve them
    // avoid calling kernel.resolve<T> here. Get the contructor
    // refrence from this.childView instead
    var view = new ChildViewClass();
    view.model = child;
    // return it
    return view;
  }

  public addChild(child) {
    var filteredOn = this._utils.getAppFilterState().get('filter');

    if (child.matchesFilter(filteredOn)) {
      Marionette.CompositeView.prototype.addChild.apply(this, arguments);
    }
  }

  public onRender() {
    this.update();
  }

  public update() {
    function reduceCompleted(left, right) {
      return left && right.get('completed');
    }
    var allCompleted = this.collection.reduce(reduceCompleted, true);
    this.ui.toggle.prop('checked', allCompleted);
    this.$el.parent().toggle(!!this.collection.length);
  }

  public onToggleAllClick(e) {
    var isChecked = e.currentTarget.checked;
    this.collection.each(function (todo) {
      todo.save({ 'completed': isChecked });
    });
  }
}

export = TodoListView;
