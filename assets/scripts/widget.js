"use strict";


var APP = (function (APP, $) {

  APP.Widget = function(Model) {

    var self = this;

    ////////////////////// Private Variables //////////////////////
    var model,
        $el = $('#widget');   // jquery object wrapping the element we render in


    ////////////////////// Private Methods //////////////////////
    var initialise = function() {
      model = new Model({});
      subscribeModelEvents();
      initDomEvents();
    };

    var subscribeModelEvents = function() {
      model.on("render", self.render);
    };

    var initDomEvents = function() {

      $el.on('click', '#addButton', function addItem(e) {
        var newTask = $.trim( $('#newTask').val() );
        if(newTask) {
          model.trigger('addTask', newTask);
        }
        $('#newTask').val("");
      });

      $el.on('click', '.deleteButton', function deleteItem(e) {
        var index = $(e.target).data(index).index;
        model.trigger('removeTask', index);
      });

    };


    ////////////////////// public methods ////////////////////////

    self.init = function() {
      initialise();
    };

    self.render = function(data) {
      var templateString = $("#widget_tmpl").html();
      var template = APP.template(templateString,data);
      $el.html( template({tasks:data}) );
    };

    self.init();
  };


  APP.widget = new APP.Widget(APP.Model);
  return APP;

}(APP, jQuery));