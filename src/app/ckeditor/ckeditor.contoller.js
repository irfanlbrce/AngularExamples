(function() {
  'use strict';

  angular
    .module('myNewProject')
    .controller('ckeditorController', ckeditorController);

  /** @ngInject */
  function ckeditorController() {
    var vm = this;
    vm.Text = '';
  }
})();
