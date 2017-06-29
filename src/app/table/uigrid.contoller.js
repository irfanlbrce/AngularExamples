(function() {
	'use strict';

	angular
		.module('myNewProject')
		.controller('uigridController', uigridController);

	/** @ngInject */
	function uigridController($scope) {
		var vm = this;
        $scope.gridOptions = {
        enableSorting: true,
        columnDefs: [
          { name:'firstName', field: 'first-name' },
          { name:'1stFriend', field: 'friends' },
          { name:'city', field: 'address'},
          { name:'getZip', field: 'getZip'}
        ],
        data : [      {
                           "first-name": "",
                           "friends": "",
                           "address": "",
                           "getZip" : "",
                       }
                   ]
      };
 $scope.AddgridOptions ={
     columnDefs : undefined,
     data: []
 }
$scope.test = function(data){
  console.log(data);
  $scope.AddgridOptions = data;
}
		
		activate();

		function activate() {

		}
	}
})();