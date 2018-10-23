"use strict";
{
    angular.module('app')
    .component('movieList', {
        templateUrl: 'components/movieList/movieList.html',
        binding:{ 
            item: '<'
    }
    })
}