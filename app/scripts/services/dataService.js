'use strict';

angular.module('routingDemo')
    .factory('dataService', function ($q, $firebase, toastr, $timeout, FIREBASE_URI) {

        //Products
        var productsRef = new Firebase(FIREBASE_URI + "products");
        var productsSync = $firebase(productsRef);

        var dataService = {
            addProduct: addProduct,
            getColors: getColors,
            deleteProduct: deleteProduct,
            getProduct: getProduct,
            products: productsSync.$asObject()
        };

        return dataService;

        /**=================PRIVATE======================**/

        function addProduct(product) {
            return productsSync.$push(product)
                .then(function (childRef) {
                    toastr.success('New product successfully saved.')
                })
        }

        function getColors() {
            var deferred = $q.defer();
            $timeout(function () {
                deferred.resolve(['Blue', 'Green', 'Purple', 'Red', 'Yellow']);
            }, 100);
            return deferred.promise;
        }

        function getProduct(key) {
            var productRef = new Firebase(FIREBASE_URI + "products/" + key);
            var productSync = $firebase(productRef);
            return productSync.$asObject();
            //return dataService.products[key];
        }

        function deleteProduct(key) {
            var productRef = new Firebase(FIREBASE_URI + "products/" + key);
            return productRef.remove();
        }

    });

