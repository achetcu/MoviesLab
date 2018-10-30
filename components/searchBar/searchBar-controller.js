"use strict"; {
    angular.module('app')
        .controller('searchBarController', function (movieService) {
            const $ctrl = this;

            $ctrl.newSearch = movieService.newSearch;


        });

}