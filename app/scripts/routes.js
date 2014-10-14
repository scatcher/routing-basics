(function () {
    'use strict';

    angular
        .module('routingDemo')
        .config(routes);

    /* @ngInject */
    function routes($stateProvider, $urlRouterProvider) {

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
                /** Using inline template, just creating a ui-view container for child states to be injected in */
                template: '<div ui-view class="fx-fade-up fx-speed-300"></div>',
                resolve: {
                    /** All child states inherit "colors" and can optionally have it injected in their controllers */
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
                        /** Resolve returns a sync response instead of resolving a promise */
                        return {
                            name: '',
                            price: 0,
                            description: ''
                        }
                    }
                }
            })

            .state('products.display', {
                url: '/display/:key',
                templateUrl: 'features/products/product.html',
                /** We can also specify the controller inline instead of referencing the name */
                controller: function ($scope, product, colors) {
                    $scope.product = product;
                    $scope.colors = colors;
                    $scope.state = {
                        formDisabled: true,
                        mode: 'Display',
                        showDelete: false,
                        showSave: false
                    };
                },
                resolve: {
                    product: function ($stateParams, dataService) {
                        return dataService.getProduct($stateParams.key);
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
    }


})();


