"use strict"; {
    angular.module('app', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    template: '<search-bar></search-bar>'
                })
                .when('/movieList', {
                    template: '<movie-list></movie-list>'
                })
                .when('/watchList', {
                    template: '<watch-list></watch-list>'
                })
                .otherwise({
                    template: '<h1>404 Page Does Not Exist</h1>'
                })
        });


}