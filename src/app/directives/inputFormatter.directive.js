(function() {
    'use strict';

    angular
        .module('myNewProject')
        .directive('numericOnly', numericOnly)
        .directive('currencyInput', currencyInput)
        .directive('angularCurrency', angularCurrency);

    numericOnly.$inject = [];
    currencyInput.$inject = [];
    angularCurrency.$inject = [];

    function numericOnly() {
        return {

            require: 'ngModel',
            link: function(scope, element, attrs, modelCtrl) {

                var regex = /^[1-9]\d*(((.\d{3}){1})?(\,\d{0,2})?)$/;
                modelCtrl.$parsers.push(function(inputValue) {

                    var transformedInput = inputValue;
                    if (regex.test(transformedInput)) {

                        console.log('passed the expression...');
                        modelCtrl.$setViewValue(transformedInput);
                        modelCtrl.$render();
                        return transformedInput;
                    } else {

                        console.log('did not pass the expression...');
                        transformedInput = transformedInput.substr(0, transformedInput.length - 1);
                        modelCtrl.$setViewValue(transformedInput);
                        modelCtrl.$render();
                        return transformedInput;
                    }
                });
            }
        }
    }

    function currencyInput() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attrs, ctrl) {

                return ctrl.$parsers.push(function(inputValue) {
                    var inputVal = element.val();

                    //clearing left side zeros
                    while (inputVal.charAt(0) == '0') {
                        inputVal = inputVal.substr(1);
                    }

                    inputVal = inputVal.replace(/[^\d.\',']/g, '');

                    var point = inputVal.indexOf(".");
                    if (point >= 0) {
                        inputVal = inputVal.slice(0, point + 3);
                    }

                    var decimalSplit = inputVal.split(".");
                    var intPart = decimalSplit[0];
                    var decPart = decimalSplit[1];

                    intPart = intPart.replace(/[^\d]/g, '');
                    if (intPart.length > 3) {
                        var intDiv = Math.floor(intPart.length / 3);
                        while (intDiv > 0) {
                            var lastComma = intPart.indexOf(",");
                            if (lastComma < 0) {
                                lastComma = intPart.length;
                            }

                            if (lastComma - 3 > 0) {
                                intPart = intPart.slice(0, lastComma - 3) + "," + intPart.slice(lastComma - 3);
                            }
                            intDiv--;
                        }
                    }

                    if (decPart === undefined) {
                        decPart = "";
                    } else {
                        decPart = "." + decPart;
                    }
                    var res = intPart + decPart;

                    if (res != inputValue) {
                        ctrl.$setViewValue(res);
                        ctrl.$render();
                    }

                });

            }
        };
    }

    function angularCurrency() {
        return {
            'require': '?ngModel',
            'restrict': 'A',
            'scope': {
                angularCurrency: '=',
                variableOptions: '='
            },
            'compile': compile
        };

        function compile(tElem, tAttrs) {
            var isInputText = tElem.is('input:text');

            return function(scope, elem, attrs, controller) {
                var updateElement = function(newVal) {
                    elem.autoNumeric('set', newVal);
                };

                elem.autoNumeric('init', scope.angularCurrency);
                if (scope.variableOptions === true) {
                    scope.$watch('angularCurrency', function(newValue) {
                        elem.autoNumeric('update', newValue);
                    });
                }

                if (controller && isInputText) {
                    scope.$watch(tAttrs.ngModel, function() {
                        controller.$render();
                    });

                    controller.$render = function() {
                        updateElement(controller.$viewValue);
                    };

                    elem.on('keyup', function() {
                        scope.$applyAsync(function() {
                            controller.$setViewValue(elem.autoNumeric('get'));
                        });
                    });
                    elem.on('change', function() {
                        scope.$applyAsync(function() {
                            controller.$setViewValue(elem.autoNumeric('get'));
                        });
                    });
                } else {
                    if (isInputText) {
                        attrs.$observe('value', function(val) {
                            updateElement(val);
                        });
                    }
                }
            };
        }
    }
})();

