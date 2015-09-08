////////////////////////// templating ////////////////////////////

"use strict";

var APP = (function (APP) {
  // Simple JavaScript Templating
  // John Resig - http://ejohn.org/ - MIT Licensed

  /**
   * @param  {[type]} str  template string
   * @return {[type]}      [description]
   */
  APP.template = function tmpl(str){

      // Generate a reusable function that will serve as a template
      // generator
      return new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");

  };


  return APP;

}(APP));
