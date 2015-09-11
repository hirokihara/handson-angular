/**
 * Books Service module.
 *
 * @module angular2.service.books
 */
(function() {
  'use strict';

  angular
    .module('angular2.service.books', ['ngResource'])
    .factory('BooksService', BooksService);

  BooksService.$inject = ['$resource'];

  /**
   * BooksService
   *
   * @class BooksService
   * @constructor
   */
  function BooksService($resource) {
    return $resource('/api/books/:isbn', {});
  }

})();
