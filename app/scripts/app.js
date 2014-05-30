'use strict';

var app = angular.module('angularThingy', []);

app.factory('fetchSeriesService', function ($http) {
  var SERVICEURL = '/ext_resources/catalog.json';
  return {

    getShows: function (requestedData, method, url) {
      method = method || 'GET';
      requestedData = requestedData || '';
      url = url || SERVICEURL;

      return $http({
        method: method,
        data: requestedData,
        url: url
      });
    }
  };
});

app.directive('seriesList', function () {
  return {
    restrict: 'E',
    templateUrl: '/views/series-list.html',
    controller: function ($scope) {
      $scope.setVisible = function (index) {
        $scope.isVisible = index;
      };
    }
  };
});

app.directive('seriesForm', function () {
  return {
    restrict: 'E',
    templateUrl: '/views/series-form.html',
    controller: function ($scope) {
      $scope.newShow = {};
      $scope.newShow.mainCharacters = [];
      //var chars = $scope.newShow.mainCharacters;

      $scope.newChar = function () {
        //var chars = $scope.newShow.mainCharacters,
        var nC = {};
        $scope.newShow.mainCharacters.push(nC);
      };

      $scope.add = function (index) {
        // Función al salvar
        console.log('Add');
      };
    }
  };
});
