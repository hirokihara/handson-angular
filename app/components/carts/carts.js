/**
 * Carts Components module.
 *
 * @module angular2.components.carts
 */
(function () {
  'use strict';

  angular
    .module('angular2.components.carts', [])
    .controller('CartsController', CartsController);

  CartsController.$inject = [];

  /**
   * CartsController
   *
   * @class CartsController
   * @constructor
   */
  function CartsController() {
    console.log('CartsController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  CartsController.prototype.activate = function() {
    console.log('CartsController activate Method');
    vm = this;
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
