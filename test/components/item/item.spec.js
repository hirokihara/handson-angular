(function() {
  'use strict';

  describe('Controller: ItemController', function() {

    beforeEach(module('angular2.components.item'));

    var ItemController;

    beforeEach(inject(function($controller) {
      ItemController = $controller('ItemController');
    }));

    describe('ItemController', function() {
      it('Test Case', function() {
        ItemController.activate();
      });
    });
  });
})();
