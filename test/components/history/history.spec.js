(function() {
  'use strict';

  describe('Controller: HistoryController', function() {

    beforeEach(module('angular2.components.history'));

    var HistoryController;

    beforeEach(inject(function($controller) {
      HistoryController = $controller('HistoryController');
    }));

    describe('HistoryController', function() {
      it('Test Case', function() {
        HistoryController.activate();
      });
    });
  });
})();
