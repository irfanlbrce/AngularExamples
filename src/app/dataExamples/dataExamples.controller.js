(function() {
  'use strict';

  angular
    .module('myNewProject')
    .controller('dataExamplesController', dataExamplesController);

  /** @ngInject */
  dataExamplesController.$inject = ['$scope','$http','mainService','$timeout','$window'];

  function dataExamplesController($scope, $http, mainService,$timeout,$window) {

        //all variables and functions declarations
        var vm = this;

        vm.store = [];
        vm.twodays = [];
        vm.threedays = [];

        //Function decalarations

        function loadData() {
            mainService.getItems().success(function(response) {
              console.log(response)

                vm.data = response.response.details.order.commerceItems;

                vm.dataLoading(vm.data);
            },function (error) {
              alert("Something Went Wrong");
            });
        }


        vm.dataLoading = function (lists) {
            angular.forEach(lists, function (list) {
    					if (list.itemOrderData.ShippingMethod === 'Expected Delivery in 3-7 business days') {
    						  vm.threedays.push(list);
    						  console.log("3 bussiness days matched");
    						  console.log(vm.threedays);
    					}
    					else if(list.itemOrderData.ShippingMethod === 'Expected Delivery in 2 business days'){
    					  vm.twodays.push(list);
    						  console.log("2 bussiness days matched");
    						  console.log(vm.twodays);
    					}
    					else{
    					  vm.store.push(list);
    					  console.log(vm.store);
    					}
    				});
    				return vm.lists;
        };
        vm.tresting = function () {
          focus('test');
        }

        activate();
        function focus(id, isTimeOut) {
            if (isTimeOut) {
                $timeout(function () {
                    var element = $window.document.getElementById(id);
                    if (element) {
                        element.focus();
                    }
                }, 300);
            }
            else {
                var element = $window.document.getElementById(id);
                if (element) {
                    element.focus();
                }
            }
        }
        function activate() {
            //Intitial loading functions
            loadData();

        }
    }
})();
