/* @ngInject */
module.exports = function SearchCtrl($http, $route, FlickrService, $location, $scope, Lightbox, $filter) {
    'use strict';
    var vm = this;

    vm.displayText = 'Flickr Photos';
    vm.tags = $route.current.params.tag;
    vm.size = 'm';
    vm.sizeb = 'b';
    vm.id = $route.current.params.id;
    vm.images = [];
    vm.searchByTag = null;
    vm.order = null;
    vm.asc = 'true';

    //  Toggle function for table/grid view
    vm.toggle = function() {
        $scope.table = !$scope.table;
    };

    // Creating images array for the Lightbox plugin
    vm.imagesArr = function(photos) {
        angular.forEach(photos, function(obj) {
            obj.url='https://farm'+obj.farm+'.staticflickr.com/'+
                obj.server+'/'+obj.id+'_'+obj.secret+'_'+
                vm.sizeb+'.jpg';
        });
    };

    // Filter Function for the array that solves Lightbox problem on orderBy
    vm.filterFunc = function(orderBy,asc) {
        vm.photos=$filter('orderBy')(vm.photos,orderBy,asc);
        vm.asc = !vm.asc;
        vm.order = orderBy;
    };

    //  Lightbox plugin initiation
    //
    vm.openLightboxModal = function (index) {
    Lightbox.openModal(vm.photos, index);
  };
    // Views changes Search function
    vm.search = function () {
        $location.path($scope.searchByTag ? '/search/'+ vm.tags : '/owner/'+ vm.tags);
    };

    // Search function after view change
    vm.init = function() {
        FlickrService.res(vm.tags ? 'flickr.photos.search' : 'flickr.people.getPublicPhotos')
        .search(vm.tags ? { tags: vm.tags } : { user_id: vm.id }, function (data) {
            vm.photos = data.photos.photo;
            vm.imagesArr(vm.photos);
        });
    };
    vm.init();


};
