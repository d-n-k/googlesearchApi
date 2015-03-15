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

