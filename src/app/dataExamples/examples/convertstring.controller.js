
(function () {
    'use strict';

    angular
        .module('myNewProject')
        .controller('convertstringController', convertstringController);

    convertstringController.$inject = ['$scope', 'SweetAlert'];

    function convertstringController($scope,SweetAlert) {

        //all variables and functions declarations
        var vm = this;
        vm.toCamelCase = 'mohammad irfan';
        vm.toLowerCase = 'mohammad Irfan'


        //Function decalarations
        vm.LowerCase = LowerCase;
        vm.CamelCase = CamelCase;


        activate();

        function LowerCase(s) {
            // remove all characters that should not be in a variable name
            // as well underscores an numbers from the beginning of the string
            s = s.replace(/([^a-zA-Z0-9_\- ])|^[_0-9]+/g, "").trim().toLowerCase();
            // Lowercase letters preceeded by a hyphen or a space
            s = s.replace(/([ -]+)([a-zA-Z0-9])/g, function (a, b, c) {
                return c.toLowerCase();
            });
            // Lowercase letters following numbers
            s = s.replace(/([0-9]+)([a-zA-Z])/g, function (a, b, c) {
                return b + c.toLowerCase();
            });
            return s;
        }

        function CamelCase(s) {
            // remove all characters that should not be in a variable name
            // as well underscores an numbers from the beginning of the string
            s = s.replace(/([^a-zA-Z0-9_\- ])|^[_0-9]+/g, "").trim().toLowerCase();
            // uppercase letters preceeded by a hyphen or a space
            s = s.replace(/([ -]+)([a-zA-Z0-9])/g, function(a,b,c) {
                return c.toUpperCase();
            });
            // uppercase letters following numbers
            s = s.replace(/([0-9]+)([a-zA-Z])/g, function(a,b,c) {
                return b + c.toUpperCase();
            });
            return s;
        }
        function activate() {
            //Intitial loading functions

        }


        $scope.demo1 = function() {
		SweetAlert.swal("Here's a message");
	}

	$scope.demo2 = function() {
		SweetAlert.swal("Here's a message!", "It's pretty, isn't it?");
	}

	$scope.demo3 = function() {
		SweetAlert.swal("Good job!", "You clicked the button!", "success")
	}

	$scope.demo4 = function() {
		SweetAlert.swal({   
			title: "Are you sure?",   
			text: "Your will not be able to recover this imaginary file!",   
			type: "warning",   
			showCancelButton: true,   
			confirmButtonColor: "#DD6B55",   
			confirmButtonText: "Yes, delete it!",
			closeOnConfirm: false
		},  function(){  
			SweetAlert.swal("Booyah!");
		});
	}

	$scope.demo5 = function() {
		SweetAlert.swal({   
			title: "Are you sure?",   
			text: "Your will not be able to recover this imaginary file!",   
			type: "warning",   
			showCancelButton: true,   
			confirmButtonColor: "#DD6B55",   
			confirmButtonText: "Yes, delete it!",   
			cancelButtonText: "No, cancel plx!",   
			closeOnConfirm: false,   
			closeOnCancel: false 
		}, function(isConfirm){  
			if (isConfirm) {     
				SweetAlert.swal("Deleted!", "Your imaginary file has been deleted.", "success");   
			} else {     
				SweetAlert.swal("Cancelled", "Your imaginary file is safe :)", "error");   
			} 
		});
	}


	$scope.demo6 = function() {
		SweetAlert.swal({   
			title: "Sweet!",   
			text: "Here's a custom image.",   
			imageUrl: "http://oitozero.com/img/avatar.jpg" 
		});
	}

    $scope.demo7 = function () {
            SweetAlert.swal({
                 title: "Feature comming soon..!",
                text: "",
                type: "warning",
                confirmButtonText: "Close",
                confirmButtonColor: "#DD6B55",   
                timer: 2000
            });
        }

    }
})();
