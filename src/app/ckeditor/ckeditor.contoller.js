(function() {
  'use strict';

  angular
    .module('myNewProject')
    .controller('ckeditorController', ckeditorController);

  /** @ngInject */
  function ckeditorController() {
    var vm = this;
    vm.Text = '';

     vm.customSettings = {
    control: 'brightness',
    theme: 'bootstrap',
    position: 'top left'
  };
  }
})();
