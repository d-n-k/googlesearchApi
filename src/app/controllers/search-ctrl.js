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

    $scope.searchByTag = true;

    $scope.searchHandler = function () {
        $scope.searchByTag = false;
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
            console.log($scope.searchByTag);
            FlickrService.res('flickr.people.getPublicPhotos').search({ user_id: vm.id }, function (data) {
                vm.photos = data.photos.photo;
            });
            // URL update
            $location.path('/owner/'+ vm.tags);
        }
    };

    //vm.search();

    $scope.openLightboxModal = function (index) {
    Lightbox.openModal([{'url':'https://farm{{photo.farm}}.staticflickr.com/{{photo.server}}/{{photo.id}}_{{photo.secret}}_{{ctrl.size}}.jpg'}], index);
  };


};
