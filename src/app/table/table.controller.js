(function() {
    'use strict';

    angular
        .module('myNewProject')
        .controller('TableController', TableController);

    /** @ngInject */
    function TableController(mainService,$http,$scope) {
        var vm = this;
        vm.users = []; //declare an empty array

        vm.sort = vm.sort;

        activate();

        function activate() {
            mainService.getTableData().success(function(response) {
                console.log(response)

                vm.users = response; //API request to fetch data into response
            }, function(error) {
                alert("Something Went Wrong");
            });
        }


        vm.sort = function(keyname) {
            vm.sortKey = keyname; //set the sortKey to the param passed
            vm.reverse = !vm.reverse; //if true make it false and vice versa
        }

         $http.get('app/json/value.json')
          .then(function(response) {
            $scope.pokemon = response.data.ValueTouchPoints;
          });
        $scope.$watch('search', function() {
          $scope.topIndex = 0;
        })
    }
})();