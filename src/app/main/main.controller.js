(function() {
  'use strict';

  angular
    .module('myNewProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr,$filter,$log) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1472715444080;
    vm.showToastr = showToastr;


    function test(){
      var a1 = [{"firstname":"irfan"}];
      var a2 = [{"lastname":"mohammad"}];
      vm.merge1 = angular.merge(a2,a1);
      console.log(vm.merge1);
      // vm.extend1 = angular.extend(a2,a1);
      //
      // console.log(vm.extend1);
    }
    test();

    //angular.copy
    var o1 = { name: 'David', age: 26, skill: {} };
    var o2 = angular.copy(o1);

    console.log(o2);
    // Output: { name: 'David', age: 26, skill: {} }

    //angular.extend(dst, src1, src2, ...)
    var src1 = { name: 'David', age: 30 }; // source 1
    var src2 = { age: 26, skill: {} }; // source 2
    var dst = {}; // destination

    console.log(angular.extend(dst, src1, src2));
    // Output: { name: 'David', age: 26, skill: {} }

    //angular.merge
    var src1 = { name: 'David', age: 30 };
    var src2 = { age: 26, skill: {} };
    var dst = {};

    console.log(angular.merge(dst, src1, src2));
    // Output: { name: 'David', age: 26, skill: {} }
    // It seems to the same result as the previous example's, however, ...
    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });

    }

    function getDay1(){
      var date = new Date();
      var dayD = date.setDate(date.getDate() + 5);
      var printDay = $filter('date')(new Date(dayD), 'EEEE');
      console.log(printDay);
    }
    getDay1();
  }
})();
