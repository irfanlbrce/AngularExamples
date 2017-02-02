
(function () {
    'use strict';

    angular
        .module('myNewProject')
        .controller('example2Controller', example2Controller);

    example2Controller.$inject = ['$scope','webDevTec','ngDialog'];

    function example2Controller($scope,webDevTec,ngDialog) {

        //all variables and functions declarations
        var vm = this;
        vm.openDialog = openDialog;
        vm.closeThisDialog = closeThisDialog;
        //Function decalarations



        activate();

        function activate() {
            //Intitial loading functions
            getWebDevTec();

        }



          function getWebDevTec() {
            vm.awesomeThings = webDevTec.getTec();

            angular.forEach(vm.awesomeThings, function(awesomeThing) {
              awesomeThing.rank = Math.random();
            });
          }

          function openDialog(data){
           vm.data = data;
                ngDialog.open({
                    template: 'app/dataExamples/modelDialogs/example2ModelDialog.template.html',
                    scope: $scope,
                    className: 'ngdialog-theme-plain',
                    closeByDocument: false,
                    closeByEscape: true

            });
          }
          function closeThisDialog(){
            ngDialog.close();
          }
          
          $scope.name="irfan";
          $scope.players = [
          {name: 'Gene', team: 'alpha'},
          {name: 'George', team: 'beta'},
          {name: 'Steve', team: 'gamma'},
          {name: 'Paula', team: 'beta'},
          {name: 'Scruath', team: 'gamma'}
        ];

    }
})();
