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
            getUserNavigator: getUserNavigator,
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

        function getUserNavigator() {
            var ua = navigator.userAgent, tem,
                M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if (/trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                return 'IE ' + (tem[1] || '');
            }
            if (M[1] === 'Chrome') {
                tem = ua.match(/\bOPR\/(\d+)/)
                if (tem != null) return 'Opera ' + tem[1];
            }
            M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
            if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
            return M.join(' ');

        }

    });

