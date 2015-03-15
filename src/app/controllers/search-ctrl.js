/* @ngInject */
module.exports = function SearchCtrl($http, googleService) {
    'use strict';
    var vm = this;
    vm.displayText = 'Google Search';
    vm.query = '';
    vm.searchArray = {};


    // Search function
    vm.search = function () {
        googleService.res()
        .search({ query: vm.query }, function (result) {
            vm.searchArray = result;
            console.log(vm.searchArray);
            console.log(result);
        });
    };




};
