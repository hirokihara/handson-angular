(function() {
  'use strict';

  describe('Controller: CartsController', function() {

    beforeEach(module('angular2.components.carts'));

    var CartsController;

    beforeEach(inject(function($controller) {
      CartsController = $controller('CartsController');
    }));

    describe('CartsController', function() {
      it('Test Case', function() {
        CartsController.activate();
      });
    });
  });
})();
