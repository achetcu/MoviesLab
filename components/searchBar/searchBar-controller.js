"use strict";{
    angular.module('app')
    .controller('searchBarController', function(movieService){
        const $ctrl = this;
       
        $ctrl.newSearch = movieService.newSearch;
        // $ctrl.resultlist = movieService.apicall;

        
       
    

      

        // $ctrl.addPost = function(final){
        //     $ctrl.movieList.push(final);
        //                     };
    
    
    });
    
    }