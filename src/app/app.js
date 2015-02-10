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
    .when('/owner/:id', {
        templateUrl: 'owner.html'

    })
    .otherwise({
        redirectTo: '/search/ '
    });
});

app.constant('FlickrApiKey', function() {
    'use strict';
    return 'cb9d94cde1c29815cd5a842c26496123';
});

//NOTE Be sure to precede every function exported and added to this module with /* @ngInject */
//This is an explicit hint to ng-annotate, and is required,
//because comprehending and traversing the browserify-ed commonJS modules is beyond the scope of ng-annotate
//If this is not done, AngularJs' dependency injection will fail on minified builds
//See https://docs.angularjs.org/tutorial/step_05#a-note-on-minification
app.factory('FlickrService', require('./services/flickr-service'));
// app.factory('FlickrServiceById', require('./services/flickr-service-byID'));
app.controller('SearchCtrl', require('./controllers/search-ctrl'));
app.controller('OwnerCtrl', require('./controllers/owner-ctrl'));
