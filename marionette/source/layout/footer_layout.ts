/// <reference path="../interfaces.d.ts"/>
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="localstorage"/>

class FooterLayout extends Marionette.ItemView<any> implements FooterLayoutInterface {

  public templateHelpers : any;
  public collection : TodoCollectionInterface;
  private _utils : UtilsInterface;

  constructor(
      TodoCollectionInterface : TodoCollectionInterface, // injected
      UtilsInterface : UtilsInterface                    //injected
    ) {

        this._utils = UtilsInterface;
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
    var that = this;
    var template = '', url = './source/templates/footer.template';
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
    // Type definion file seems to be mising listenTo
    // using (<any>this) until is updaed
    (<any>this).listenTo(this._utils.getAppFilterState(), 'change:filter', this.updateFilterSelection, this);
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
    this.ui[this._utils.getAppFilterState().get('filter')]
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
