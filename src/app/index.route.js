(function() {
  'use strict';

  angular
    .module('myNewProject')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('dataExamples', {
        url: '/dataExamples',
        abstract:true,
        templateUrl: 'app/dataExamples/dataExamples.template.html',
        controller: 'dataExamplesController',
        controllerAs: 'dataExamples'
      })
      .state('dataExamples.example1', {
        url: '/example1',
        templateUrl: 'app/dataExamples/examples/example1.template.html',
        controller: 'dataExamplesController',
        controllerAs: 'dataExamples'
      })
      .state('dataExamples.example2', {
        url: '/example2',
        templateUrl: 'app/dataExamples/examples/example2.template.html',
        controller: 'example2Controller',
        controllerAs: 'example2'
      })
       .state('dataExamples.example3', {
        url: '/example3',
        templateUrl: 'app/dataExamples/examples/example3.template.html',
        controller: 'example2Controller',
        controllerAs: 'example2'
      })
      .state('dataExamples.convertstring', {
        url: '/convertstring',
        templateUrl: 'app/dataExamples/examples/convertstring.template.html',
        controller: 'convertstringController',
        controllerAs: 'convertstring'
      })
      .state('ckeditor', {
        url: '/ckeditor',
        templateUrl: 'app/ckeditor/ckeditor.template.html',
        controller: 'ckeditorController',
        controllerAs: 'ckeditor'
      })
      .state('TinyMCE', {
        url: '/TinyMCE',
        templateUrl: 'app/ckeditor/TinyMCE.template.html',
        controller: 'TinyMCEController',
        controllerAs: 'TinyMCE'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
