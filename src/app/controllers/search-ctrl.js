/* @ngInject */
module.exports = function SearchCtrl($http, $route, FlickrService, $location, $scope, Lightbox) {
    'use strict';
    var vm = this;
    vm.displayText = 'Flickr Photos';
    vm.tags = $route.current.params.tag;
    vm.size = 'm';
    vm.sizeb = 'b';
    vm.id = $route.current.params.id;
    vm.images = [];
    vm.searchByTag = null;

    //Toggle function for table/grid view
    vm.toggle = function() {
        $scope.table = !$scope.table;
    };

    vm.search = function () {
        if ($scope.searchByTag) {
            console.log($scope.searchByTag);
            FlickrService.res('flickr.photos.search').search({ tags: vm.tags }, function (data) {
                vm.photos = data.photos.photo;
                vm.imagesArr(vm.photos);
            });
            // URL update
            $location.path('/search/'+ vm.tags);
        }
        else {
            FlickrService.res('flickr.people.getPublicPhotos').search({ user_id: vm.id }, function (data) {
                vm.photos = data.photos.photo;
                vm.imagesArr(vm.photos);
            });

            // URL update
            $location.path('/owner/'+ vm.tags);
        }
    };

    vm.init = function() {
        if(vm.tags) {
            FlickrService.res('flickr.photos.search').search({ tags: vm.tags }, function (data) {
                vm.photos = data.photos.photo;
                vm.imagesArr(vm.photos);
            });
        }
        if(vm.id) {
            FlickrService.res('flickr.people.getPublicPhotos').search({ user_id: vm.id }, function (data) {
                vm.photos = data.photos.photo;
                vm.imagesArr(vm.photos);
            });
        }
    };
    vm.init();

    //Creating images array for lightbox plugin
    vm.imagesArr = function(photos) {
        for(var photo in photos) {
            vm.images.push({'url':'https://farm'+photos[photo].farm+'.staticflickr.com/'+
                photos[photo].server+'/'+photos[photo].id+'_'+photos[photo].secret+'_'+
                vm.sizeb+'.jpg'});
        }
    };
    //Lightbox plugin initiation
    //
    vm.openLightboxModal = function (index) {
    Lightbox.openModal(vm.images, index);
  };


};
