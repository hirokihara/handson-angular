/**
 * This is angular2 module.
 *
 * @module angular2
 */
(function () {
  'use strict';

  angular
    .module('angular2', [
      'ngNewRouter',
      'angular2.config',
      'Angular2App.value',
      'angular2.components.itemlist',
      'angular2.components.item',
      'angular2.components.history',
      'angular2.components.carts',
      'angular2.components.user'
    ])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    {path: '/',       redirectTo: '/itemlist'},
    {path: '/itemlist',    component: 'itemlist'},
    {path: '/item/:isbn',   component: 'item'},
    {path: '/history',    component: 'history'},
    {path: '/carts',   component: 'carts'},
    {path: '/user', component: 'user'}
  ];

  AppController.$inject = ['Angular2AppValue', '$rootScope'];

  /**
   * AppController
   *
   * @class AppController
   * @main angular2
   * @constructor
   */
  function AppController (Angular2AppValue, $rootScope) {
    this.Angular2AppValue = Angular2AppValue;
    this.$rootScope = $rootScope;
    vm = this;
    vm.$rootScope.$watch(cartsValue, cartsSet);
  }

  var vm;

  var cartsSet = function(value) {
    vm.carts = value;
  };

  var cartsValue = function () {
    return vm.Angular2AppValue.carts;
  };
})();
