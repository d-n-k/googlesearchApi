(function(module) {
try {
  module = angular.module('app');
} catch (e) {
  module = angular.module('app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('search.html',
    '<div class="page" ng-controller="SearchCtrl as ctrl"><p>{{ctrl.displayText}}</p><form><input class="tags-input" ng-model="ctrl.query" ng-change="ctrl.search()"></form><div class="container-fluid" ng-repeat="item in ctrl.searchArray"><div class="row"><p class="col-md-4 btn btn-primary" ng-click="show=!show">{{ item.name }}</p><p class="col-md-7 btn btn-default title" ng-show="show">Category: {{ item.notable.name || \'none\' }}; Score: {{ item.score | number : 1}}</p></div></div></div>');
}]);
})();
