/*globals angular*/

var app = angular.module('app', [
    'ngRoute',
    'ngResource'
]);

app.config(function($routeProvider) {
    'use strict';
    $routeProvider.when('/search/:tag', {
        templateUrl: 'search.html'
    })
    .otherwise({
        redirectTo: '/search/forest'
    });
});

app.constant('FlickrApiKey', function() {
    'use strict';
    return '197e87889cad7c709f54b583d9690a4f';
});

//NOTE Be sure to precede every function exported and added to this module with /* @ngInject */
//This is an explicit hint to ng-annotate, and is required,
//because comprehending and traversing the browserify-ed commonJS modules is beyond the scope of ng-annotate
//If this is not done, AngularJs' dependency injection will fail on minified builds
//See https://docs.angularjs.org/tutorial/step_05#a-note-on-minification
app.factory('FlickrService', require('./services/flickr-service'));
app.controller('SearchCtrl', require('./controllers/search-ctrl'));
