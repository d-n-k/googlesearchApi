/* @ngInject */
module.exports = function SearchCtrl($http, $route, FlickrService) {
    'use strict';
    var vm = this;
    vm.displayText = 'Flickr Photos';
    vm.tags = $route.current.params.tag;
    vm.size = 'm';

    vm.search = function () {
        FlickrService.search({ tags: vm.tags }, function (data) {
            vm.photos = data.photos.photo;
        });
    };

    vm.search();
};
