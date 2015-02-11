/* @ngInject */
module.exports = function SearchCtrl($http, $route, FlickrService, $location, $scope, Lightbox) {
    'use strict';
    var vm = this;
    vm.displayText = 'Flickr Photos';
    vm.tags = $route.current.params.tag;
    vm.size = 'm';
    vm.sizeb = 'b';
    vm.id = $route.current.params.id;
    console.log('searchCTRL');
    $scope.owner = ($location.path().indexOf('owner')>-1);

    $scope.searchByTag = 'true';

    $scope.searchHandler = function () {
        $scope.searchByTag = !$scope.searchByTag;
    };



    $scope.toggle = function() {
        $scope.table = !$scope.table;
    };

    vm.search = function () {
        console.log($scope.searchByTag);

        if ($scope.searchByTag) {
            FlickrService.res('flickr.photos.search').search({ tags: vm.tags }, function (data) {
                vm.photos = data.photos.photo;
            });
            // URL update
            $location.path('/search/'+ vm.tags);
        }
        else {
            FlickrService.res('flickr.people.getPublicPhotos').search({ user_id: vm.id }, function (data) {
                vm.photos = data.photos.photo;
            });
            // URL update
            $location.path('/owner/'+ vm.tags);
        }
    };

    vm.search();


};
