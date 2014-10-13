'use strict';

/**
 * @ngdoc function
 * @name routingDemo.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the routingDemo
 */
angular.module('routingDemo')
    .controller('mainCtrl', function ($scope, products) {

        var state = {
            filterText: ''
        };

        $scope.products = products;

        $scope.state = state;
        //$scope.teamsData = teamsData;
    });
