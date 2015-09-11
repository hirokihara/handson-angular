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
    {path: '/item',   component: 'item'},
    {path: '/history',    component: 'history'},
    {path: '/carts',   component: 'carts'},
    {path: '/user', component: 'user'}
  ];

  AppController.$inject = [];

  /**
   * AppController
   *
   * @class AppController
   * @main angular2
   * @constructor
   */
  function AppController () {}
})();
