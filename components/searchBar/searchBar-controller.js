"use strict";{
    angular.module('app')
    .controller('searchBarController', function(movieService){
        const $ctrl = this;
       
        $ctrl.newSearch = movieService.newSearch;
        $ctrl.movieName = movieService.movies;
       
    

      

        // $ctrl.addPost = function(final){
        //     $ctrl.movieList.push(final);
        //                     };
    
    
    });
    
    }