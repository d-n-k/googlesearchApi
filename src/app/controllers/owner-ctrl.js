/* @ngInject */
module.exports = function OwnerCtrl($http, $route,FlickrService, $location, $scope) {
    'use strict';
    var vm = this;
    vm.displayText = 'Flickr Photos';
    vm.tags = $route.current.params.tags;
    vm.id = $route.current.params.id;
    vm.size = 'm';
    $scope.toggle = function() {
        $scope.table = !$scope.table;
    };
    console.log('ownerCTRL');
    console.log($route.current.params.id);

    vm.search = function () {
    if (document.getElementById('optionsRadios3').checked) {
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
            $location.path('/owner/'+ vm.id);
        }
    };
    vm.search();


};
