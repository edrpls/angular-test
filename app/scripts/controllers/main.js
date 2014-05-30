'use strict';

var app = angular.module('angularThingy');

app.controller('SeriesController', function ($scope, $http, fetchSeriesService) {

  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $scope.showsLength = 0;

  $scope.fetchSeries = function () {
    $scope.showList = true;
    $scope.showForm = false;

    // Servicio para traer información.
    fetchSeriesService.getShows().then(
      function (data) {
        data = data.data;
        $scope.showsLength = data.series.length;
        $scope.series = data.series;
      },
      function (data) {
        alert('OH NOES!');
        console.log(data);
      });

    //$http({
    //  method: 'GET',
    //  url: '/ext_resources/catalog.json'
    //})
    //.success(function (data) {
    //  $scope.showsLength = data.series.length;
    //  $scope.series = data.series;
    //})
    //.error(function () {
    //  alert('OH NOES!');
    //});
  };

  $scope.addShows = function () {
    $scope.showList = false;
    $scope.showForm = true;
  };

});
