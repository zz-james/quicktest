////////////////////////// model ////////////////////////////

"use strict";


var APP = (function (APP) {

  /**
   * Constructor for the model
   */
  APP.Model = function() {

    var self  = APP.observable(this);
    var tasks = [];

    /* ----------------- event listeners ------------------ */

    // add task to collection
    self.on('addTask', function(newTask) {
      tasks.push(newTask);
      self.trigger('render', tasks);
    });

    // remove task to collection
    self.on('removeTask', function(index) {
      tasks.splice(index, 1);
      self.trigger('render', tasks);
    });

    return self; // constructor returns the observable version of self
  };

  return APP;

}(APP));
