(function() {
  'use strict';

  angular
    .module('myNewProject')
    .controller('TinyMCEController', TinyMCEController);

  /** @ngInject */
  function TinyMCEController($scope) {
    var vm = this;
    $scope.tinymceModel = 'Initial content';

  $scope.getContent = function() {
    console.log('Editor content:', $scope.tinymceModel);
  };

  $scope.setContent = function() {
    $scope.tinymceModel = 'Time: ' + (new Date());
  };

  $scope.tinymceOptions = {
    plugins: 'tabfocus preview link image code textcolor wordcount fullscreen spellchecker code',
     themes: "inlite",
    toolbar1: 'currentdate preview spellchecker fullscreen forecolor backcolor | undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
    setup: function(editor) {
    
    
    
    function insertDate() {
      var html = 'gfgdgfgdfgdfgdf';
      editor.insertContent(html);
    }

    editor.addButton('currentdate', {
         text: "My Button",
        tooltip: "Insert Current Date",
         onclick: insertDate
    });
  }
  };
  }
})();

