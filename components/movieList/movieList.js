"use strict";
{
    angular.module('app')
    .component('movieList', {
        controller: 'movieListController',
        templateUrl: 'components/movieList/movieList.html',
        binding:{ 
            item: '<'
    }
    })
}