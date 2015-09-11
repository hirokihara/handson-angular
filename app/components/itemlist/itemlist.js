/**
 * Itemlist Components module.
 *
 * @module angular2.components.itemlist
 */
(function () {
  'use strict';

  angular
    .module('angular2.components.itemlist', ['angular2.service.books'])
    .controller('ItemlistController', ItemlistController);

  ItemlistController.$inject = ['BooksService'];

  /**
   * ItemlistController
   *
   * @class ItemlistController
   * @constructor
   */
  function ItemlistController(BooksService) {
    console.log('ItemlistController Constructor');
    this.BooksService = BooksService;
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  ItemlistController.prototype.activate = function() {
    console.log('ItemlistController activate Method');
    vm = this;
    var books = vm.BooksService.query().$promise;
    books
      .then(function (items) {
        vm.items = items;
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
