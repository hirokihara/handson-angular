/**
 * Item Components module.
 *
 * @module angular2.components.item
 */
(function () {
  'use strict';

  angular
    .module('angular2.components.item', [
      'angular2.service.books'])
    .controller('ItemController', ItemController);

  ItemController.$inject = ['$routeParams', 'BooksService'];

  /**
   * ItemController
   *
   * @class ItemController
   * @constructor
   */
  function ItemController($routeParams, BooksService) {
    console.log('ItemController Constructor');
    this.isbn = $routeParams.isbn;
    this.BooksService = BooksService;
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
    var books = vm.BooksService.get({isbn: vm.isbn}).$promise;
    books
      .then(function (item) {
        vm.image = item.image
        vm.title = item.title;
        vm.description = item.description;
        vm.author = item.author;
        vm.publisher = item.publisher;
        vm.isbn = item.isbn;
        vm.price = item.price;
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
