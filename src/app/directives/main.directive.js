(function () {
    'use strict';

    angular
        .module('myNewProject')
        .directive('inputformat', inputformat);

    inputformat.$inject = ['$filter'];

    function inputformat($filter) {
        var directive = {
           require: '?ngModel',
           restrict: 'A',
           link: link,
        };
        return directive;

        function link(scope, element, attrs,ctrl) {
           if (!ctrl) return;

            ctrl.$formatters.unshift(function (a) {
                return $filter(attrs.format)(ctrl.$modelValue)
            });

				    ctrl.$parsers.unshift(function (viewValue) {
                    var plainNumber = element.val().replace(/[^\d|\-+|\.+]/g, ''),
                        b = $filter('number')(plainNumber);

                    element.val(b);

                    return plainNumber;
                });
         }
        }
})();