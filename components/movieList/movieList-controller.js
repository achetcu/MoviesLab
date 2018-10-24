"use strict";{
    angular.module('app')
    .controller('movieListController', function(movieService){
        const $ctrl = this;

        $ctrl.moviename = movieService.moviename;
       
        $ctrl.list= [
            {title: 'test', test: 'test'},
            {title: 'test', test: 'test'}, 
           
            ];
        });
    
    }