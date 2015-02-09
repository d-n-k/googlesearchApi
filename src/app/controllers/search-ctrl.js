/* @ngInject */
module.exports = function SearchCtrl($http, $route, FlickrService, FlickrServiceById, $location) {
    'use strict';
    var vm = this;
    vm.displayText = 'Flickr Photos';
    vm.tags = $route.current.params.tag;
    vm.size = 'm';
    vm.id = $route.current.params.id;
    console.log('searchCTRL');
    console.log($route.current.params.tag);
    console.log(document.getElementById('optionsRadios1').checked);

    vm.search = function () {

        if (document.getElementById('optionsRadios1').checked) {
            FlickrService.search({ tags: vm.tags }, function (data) {
                vm.photos = data.photos.photo;
            });
            // URL update
            $location.path('/search/'+ vm.tags);
        }
        else {
            FlickrServiceById.search({ user_id: vm.id }, function (data) {
                vm.photos = data.photos.photo;
            });
            // URL update
            $location.path('/owner/'+ vm.tags);
        }
    };

    vm.search();

};
