// Generated by CoffeeScript 2.0.0-beta6
void function () {
  var CORE_MODULES, resolve;
  resolve = require('resolve');
  CORE_MODULES = require('./core-modules');
  module.exports = function (x) {
    return resolve.isCore(x) || [].hasOwnProperty.call(CORE_MODULES, x);
  };
}.call(this);