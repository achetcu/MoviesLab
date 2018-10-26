"use strict";{
    angular.module('app')
    .controller('movieListController', function(movieService){
        const $ctrl = this;
        $ctrl.name = movieService.moviename
        $ctrl.titles = movieService.movietitle
        
        $ctrl.showOverview = function(movie){
            movie.showOverview = !movie.showOverview
        }
        $ctrl.showMore = function(movie){
            movie.showOverview = !movie.showOverview
        }

       $ctrl.watchList = function(result){
            movieService.watch.push(result)
           }

              });
    
    }