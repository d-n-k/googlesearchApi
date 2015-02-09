/* @ngInject */
module.exports = function OwnerCtrl($http, $route,FlickrService,FlickrServiceById, $location) {
    'use strict';
    var vm = this;
    vm.displayText = 'Flickr Photos';
    vm.tags = $route.current.params.tags;
    vm.size = 'm';
    console.log('ownerCTRL');
    console.log($route.current.params.tags);

    vm.search = function () {
if (document.getElementById('optionsRadios3').checked) {
            FlickrService.search({ tags: vm.tags }, function (data) {
                vm.photos = data.photos.photo;
            });
            // URL update
            $location.path('/search/'+ vm.tags);
        }
        else {
            FlickrServiceById.search({ user_id: vm.tags }, function (data) {
                vm.photos = data.photos.photo;
            });
            // URL update
            $location.path('/owner/'+ vm.tags);
        }
    };
    vm.search();
    console.log(vm.photosO);

};
