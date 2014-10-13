'use strict';

angular.module('routingDemo')

    .config(function ($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /
        $urlRouterProvider
            //Default Route
            .otherwise('/');

        $stateProvider
        /**Empty Route**/
            .state('home', {
                url: '/',
                templateUrl: 'features/main/main.html',
                controller: 'mainCtrl',
                resolve: {
                    products: function (dataService) {
                        return dataService.products;
                    }
                }
            })

            .state('product', {
                url: '/product',
                abstract: true,
                template: '<div ui-view></div>',
                resolve: {
                    colors: function (dataService) {
                        return dataService.getColors();
                    }
                }
            })
            .state('product.create', {
                url: '/create',
                templateUrl: 'features/products/product.html',
                controller: 'createProductCtrl',
                resolve: {
                    product: function () {
                        return {
                            name: '',
                            price: 0,
                            description: ''
                        }
                    }
                }
            })
            .state('product.edit', {
                url: '/edit/:key',
                templateUrl: 'features/products/product.html',
                controller: 'editProductCtrl',
                resolve: {
                    product: function ($stateParams, dataService) {
                        return dataService.getProduct($stateParams.key);
                    }
                }
            })


            .state('about', {
                url: '/about',
                templateUrl: 'features/about/about.html',
                controller: 'aboutCtrl'
            })

    });
