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

  ItemlistController.$inject = ['BooksService', 'Angular2AppValue'];

  /**
   * ItemlistController
   *
   * @class ItemlistController
   * @constructor
   */
  function ItemlistController(BooksService, Angular2AppValue) {
    console.log('ItemlistController Constructor');
    this.BooksService = BooksService;
    this.Angular2AppValue = Angular2AppValue;
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

  /*
  */
  ItemlistController.prototype.addCart = function (isbn) {
    console.log('ItemlistController.prototype.addCart');
    this.Angular2AppValue.carts = this.Angular2AppValue.carts + 1;
  };

  /*
  */
  ItemlistController.prototype.removeCart = function (isbn) {
    console.log('ItemlistController.prototype.removeCart');
    if (this.Angular2AppValue.carts > 0) {
      this.Angular2AppValue.carts = this.Angular2AppValue.carts - 1;
    }
  };
  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
