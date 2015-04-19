///<reference path="../../typings/tsd.d.ts" />

class FooterLayout extends Marionette.ItemView<any> {

  public templateHelpers : any;
  public collection : TodoCollectionInterface;

  constructor(TodoCollectionInterface : TodoCollectionInterface /*injected*/) {
    this.collection = TodoCollectionInterface;
    this.ui = {
      filters: '#filters a',
      completed: '.completed a',
      active: '.active a',
      all: '.all a',
      summary: '#todo-count',
      clear: '#clear-completed'
    };
    this.events = <any> {
      'click @ui.clear': 'onClearClick'
    };
    this.collectionEvents = {
      'all': 'render'
    };
    this.templateHelpers = {
      activeCountLabel: function () {
        return (this.activeCount === 1 ? 'item' : 'items') + ' left';
      }
    };
    super();
  }

  private template(serialized_model) {
    var template = '', url = './templates/footer_template.hbs';
    Backbone.$.ajax({
        async   : false,
        url     : url,
        success : function (templateHtml : string) {
            template = templateHtml;
        }
    });
    return _.template(template)();
  }

  public initialize() {
    this.listenTo(App.request('filterState'), 'change:filter', this.updateFilterSelection, this);
  }

  public serializeData() {
    var active = this.collection.getActive().length;
    var total = this.collection.length;

    return {
      activeCount: active,
      totalCount: total,
      completedCount: total - active
    };
  }

  public onRender() {
    this.$el.parent().toggle(this.collection.length > 0);
    this.updateFilterSelection();
  }

  public updateFilterSelection() {
    this.ui.filters.removeClass('selected');
    this.ui[App.request('filterState').get('filter')]
    .addClass('selected');
  }
  
  public onClearClick() {
    var completed = this.collection.getCompleted();
    completed.forEach(function (todo) {
      todo.destroy();
    });
  }
}

export = FooterLayout;
