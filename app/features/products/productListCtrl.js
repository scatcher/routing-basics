'use strict';

/**
 * @ngdoc function
 * @name routingDemo.controller:productListCtrl
 * @description
 * # productListCtrl
 * Controller of the routingDemo
 */
angular.module('routingDemo')
    .controller('productListCtrl', function ($scope, products) {

        var state = {
            filterText: ''
        };

        $scope.products = products;

        $scope.state = state;
        //$scope.teamsData = teamsData;
    });
