/// <reference path="../interfaces.d.ts"/>

class TodoListView extends Marionette.CompositeView<TodoModelInterface>
                    implements TodoListViewInterface {

  constructor() {
    super();

  }
  template: '#template-todoListCompositeView',
  childView: Views.ItemView,
  childViewContainer: '#todo-list',

  ui: {
    toggle: '#toggle-all'
  },

  events: {
    'click @ui.toggle': 'onToggleAllClick'
  },

  collectionEvents: {
    'all': 'update'
  },

  initialize() {
    this.listenTo(App.request('filterState'), 'change:filter', this.render, this);
  }
  addChild(child) {
    var filteredOn = App.request('filterState').get('filter');

    if (child.matchesFilter(filteredOn)) {
      Backbone.Marionette.CompositeView.prototype.addChild.apply(this, arguments);
    }
  }
  onRender() {
    this.update();
  }
  update() {
    function reduceCompleted(left, right) {
      return left && right.get('completed');
    }
    var allCompleted = this.collection.reduce(reduceCompleted, true);
    this.ui.toggle.prop('checked', allCompleted);
    this.$el.parent().toggle(!!this.collection.length);
  }
  onToggleAllClick(e) {
    var isChecked = e.currentTarget.checked;
    this.collection.each(function (todo) {
      todo.save({ 'completed': isChecked });
    });
  }
}

export = TodoListView;
