'use strict';

angular.module('routingDemo')

    .config(function ($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /
        $urlRouterProvider
            .when('/products', '/products/list')
            //Default Route
            .otherwise('/');

        $stateProvider
            /** Default Route */
            .state('home', {
                url: '/',
                templateUrl: 'features/home/home.html',
                controller: 'homeCtrl'
            })


            .state('products', {
                url: '/products',
                abstract: true,
                template: '<div ui-view class="fx-fade-up fx-speed-300"></div>',
                resolve: {
                    colors: function (dataService) {
                        return dataService.getColors();
                    }
                }
            })
            .state('products.list', {
                url: '/list',
                templateUrl: 'features/products/productList.html',
                controller: 'productListCtrl',
                resolve: {
                    products: function (dataService) {
                        return dataService.products;
                    }
                }
            })
            .state('products.create', {
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
            .state('products.edit', {
                url: '/edit/:key',
                templateUrl: 'features/products/product.html',
                controller: 'editProductCtrl',
                resolve: {
                    product: function ($stateParams, dataService) {
                        return dataService.getProduct($stateParams.key);
                    }
                }
            });



    });
