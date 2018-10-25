"use strict";{
    angular.module('app')
    .controller('movieListController', function(movieService){
        const $ctrl = this;

        // $ctrl.moviename = movieService.moviename;
        // $ctrl.movie = movieService.movielist;
        // $ctrl.names = movieService.resultslist
        $ctrl.name = movieService.moviename
        $ctrl.titles = movieService.movietitle
        $ctrl.list= [
           
            ];
        });
    
    }