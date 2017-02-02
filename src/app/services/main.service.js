(function() {
  'use strict';

  angular
    .module('myNewProject')
    .factory('mainService', mainService);

  /** @ngInject */
  mainService.$inject = ['$log','$http'];
  function mainService($log,$http) {

      var getDeals = function () {
       return $http.get('http://www.cheapshark.com/api/1.0/deals');
      };

      var getItems = function () {
       return $http.get('app/data/data.json');
      };

      var getList = function () {
       return $http.get('app/data/part.json');
      };


        return {
            getDeals : getDeals,
            getItems : getItems,
            getList : getList
        };
    };
})();
