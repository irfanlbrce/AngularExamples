(function () {
    "use strict";
    angular.module('myNewProject')
    .directive('ckEditor', function () {

        CKEDITOR.on('instanceCreated', function (event) {
            var editor = event.editor;

            editor.on('configLoaded', function () {
                editor.config.toolbar = [
                    { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'Outdent', 'Indent', 'FontSize','BulletedList', 'NumberedList','Undo', 'Redo','Source','Maximize','SpellChecker','TextColor','PasteText', 'PasteFromWord', 'RemoveFormat','Image', 'Table', 'SpecialChar', 'Strike','Link', 'Unlink', 'Anchor','JustifyBlock','PageBreak'] }
                ];
            });
        });

        return {
            restrict: 'E',
            scope: {
                ngModel: '=ngModel',
                ngDisabled: '=ngDisabled',
                ngConfig: '=ngConfig'
            },
            link: function (scope, elem, attrs) {
                elem[0].innerHTML = '<div class="ck-editor"></div>';

                var elemEditor = elem[0].querySelectorAll('.ck-editor');
                var config = {
                    readOnly: scope.ngDisabled ? scope.ngDisabled : false
                };

                var editor = CKEDITOR.appendTo(elemEditor[0], (scope.ngConfig ? scope.ngConfig : config), '');

                var addEventListener = function (editor) {
                    (editor).on('change', function (evt) {
                        scope.$apply(function () {
                            scope.ngModel = evt.editor.getData();
                        });
                    });
                    (editor).on('focus', function (evt) {
                        editor.setData(scope.ngModel);
                    });
                };

                var interval = undefined;
                var setValue = function (value, editor) {
                    if (interval) {
                        clearTimeout(interval);
                    }
                    interval = setTimeout(function () {
                        if (value && editor) {
                            editor.setData(value);
                        } else if (editor) {
                            editor.setData('');
                        }
                    }, 1000);
                };

                addEventListener(editor);

                scope.$watch('ngModel', function (value) {
                    if (value !== editor.getData()) {
                        setValue(value, editor);
                    }
                });

                scope.$watch('ngDisabled', function (value) {
                    if (value) {
                        config.readOnly = true;
                    } else {
                        config.readOnly = false;
                    }

                    editor.destroy();
                    editor = CKEDITOR.appendTo(elemEditor[0], (scope.ngConfig ? scope.ngConfig : config), '');
                    addEventListener(editor);
                    editor.setData(scope.ngModel);
                });
            }
        };
    });
})();