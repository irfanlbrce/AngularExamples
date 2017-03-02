(function() {
  'use strict';

  angular
    .module('myNewProject')
    .controller('AngularMaterialController', AngularMaterialController);

  /** @ngInject */
  function AngularMaterialController($scope, $timeout, $mdSidenav, $mdUtil, $log) {
    var vm = this;
    $scope.test = false;
       // $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = function(){
        $mdSidenav('left').open()
            .then(function () {
            $log.debug("close LEFT is done");
            $scope.test =!$scope.test;
            });
        };

        $scope.toggleRight1 = function(){
        $mdSidenav('left').open()
            .then(function () {
            $log.debug("close LEFT is done");
            $scope.test =!$scope.test;
            });
        };

        $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });

    };
  }
})();
