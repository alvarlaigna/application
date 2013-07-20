"use strict";

var util = require("substance-util");


// Substance.Application.Controller
// ==========================================================================
//
// Application Controller abstraction suggesting strict MVC

var Controller = function(options) {
  this.state = null;
};

Controller.Prototype = function() {

  // Finalize state transition
  // -----------------
  //
  // Editor View listens on state-changed events:
  //
  // E.g. this.listenTo(this, 'state-changed:comments', this.toggleComments);

  this.updateState = function(state, data) {
    var oldState = this.state;
    this.state = state;
    this.trigger('state-changed', this.state, oldState, data);
  };
};


// Setup prototype chain
Controller.Prototype.prototype = util.Events;
Controller.prototype = new Controller.Prototype();

module.exports = Controller;
