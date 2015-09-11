/**
 * Item Components module.
 *
 * @module angular2.components.item
 */
(function () {
  'use strict';

  angular
    .module('angular2.components.item', [])
    .controller('ItemController', ItemController);

  ItemController.$inject = [];

  /**
   * ItemController
   *
   * @class ItemController
   * @constructor
   */
  function ItemController() {
    console.log('ItemController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  ItemController.prototype.activate = function() {
    console.log('ItemController activate Method');
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
