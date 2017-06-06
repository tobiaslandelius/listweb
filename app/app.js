'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

myApp.controller('SimpleController', function ($scope) {

  $scope.customers = [{name: 'Tobias', city: 'Lund'}, {name: 'Matilda', city: 'Göteborg'},
    {name: 'Björn', city: 'Lidköping'}];

  $scope.addCustomer = function () {
    console.log("KEEEBAPP!");
    $scope.customers.push({name: $scope.newCustomer.name, city: $scope.newCustomer.city});
  }
});