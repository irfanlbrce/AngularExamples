
(function () {
    'use strict';

    angular
        .module('myNewProject')
        .controller('convertstringController', convertstringController);

    convertstringController.$inject = ['$scope'];

    function convertstringController($scope) {

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
    }
})();
