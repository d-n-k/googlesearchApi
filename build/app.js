(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/app/app.js":[function(require,module,exports){
/*globals angular*/

var app = angular.module('app', [
    'ngRoute',
    'ngResource',
    'bootstrapLightbox'
]);

app.config(function($routeProvider) {
    'use strict';
    $routeProvider.when('/search/', {
        templateUrl: 'search.html'
    })
    .otherwise({
        redirectTo: '/search'
    });
});

app.constant('FlickrApiKey', function() {
    'use strict';
    return '';
});

//NOTE Be sure to precede every function exported and added to this module with /* @ngInject */
//This is an explicit hint to ng-annotate, and is required,
//because comprehending and traversing the browserify-ed commonJS modules is beyond the scope of ng-annotate
//If this is not done, AngularJs' dependency injection will fail on minified builds
//See https://docs.angularjs.org/tutorial/step_05#a-note-on-minification
app.factory('googleService', require('./services/search-service'));
app.controller('SearchCtrl', require('./controllers/search-ctrl'));


},{"./controllers/search-ctrl":"C:\\test\\search - angular\\src\\app\\controllers\\search-ctrl.js","./services/search-service":"C:\\test\\search - angular\\src\\app\\services\\search-service.js"}],"C:\\test\\search - angular\\src\\app\\controllers\\search-ctrl.js":[function(require,module,exports){
/* @ngInject */
module.exports = function SearchCtrl($http, googleService) {
    'use strict';
    var vm = this;
    vm.displayText = 'Google Search';
    vm.query = '';
    vm.searchArray = {};


    // Search function
    vm.search = function () {
        googleService.res()
        .search({ query: vm.query }, function (result) {
            vm.searchArray = result;
            console.log(vm.searchArray);
            console.log(result);
        });
    };




};

},{}],"C:\\test\\search - angular\\src\\app\\services\\search-service.js":[function(require,module,exports){
/* @ngInject */
module.exports = function googleService($resource) {
    'use strict';

    return {
        res: function () {

            return $resource('https://www.googleapis.com/freebase/v1/search',
                {
                    // key: ''
                },
                {
                    'search': {
                        method: 'GET',
                        interceptor: {
                            'response': function (response) {
                                console.log(response);
                                // look at 'stat'
                                switch (response.statusText) {
                                    case 'fail':
                                        console.error('GoogleService error: %s', response.data.message);
                                        return {};
                                    case 'OK':
                                        console.log(response.data.result);
                                        return response.data.result;

                                }

                            }
                        }
                    }
                }
            );
        }
    };

};

},{}]},{},["./src/app/app.js"]);
