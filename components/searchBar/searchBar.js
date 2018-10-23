"use strict";
{
    angular.module('app')
    .component('searchBar',{
        controller: 'searchBarController',
        templateUrl:'components/searchBar/searchBar.html',
        binding:{ 
            item: '<'
    }
    })
    
}