"use strict"; {
    angular.module('app')
        .controller('watchListController', function (movieService) {
            const $ctrl = this;

            $ctrl.add = movieService.watch
            $ctrl.showOverview = function (movie) {
                movie.showOverview = !movie.showOverview
            };

            $ctrl.remove = function (index) {
                $ctrl.add.splice(index, 1);
            };


        });

}