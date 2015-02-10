/* @ngInject */
module.exports = function SearchCtrl($http, $route, FlickrService, $location, $scope) {
    'use strict';
    var vm = this;
    vm.displayText = 'Flickr Photos';
    vm.tags = $route.current.params.tag;
    vm.size = 'm';
    vm.id = $route.current.params.id;
    console.log('searchCTRL');
    $scope.toggle = function() {
        $scope.table = !$scope.table;
    };

    vm.search = function () {

        if (document.getElementById('optionsRadios1').checked) {
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
