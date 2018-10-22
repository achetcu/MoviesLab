"use strict";
{
    angular.module('app', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
        .when('/',{
            template:'<search-bar></search-bar>'
        })
        .when('/movieList',{
            template: '<movie-list></movie-list>'
        })
        .when('/watchList',{
            template: '<watch-list></watch-list>'
        })
        .otherwise({
            template: '<h1>404 Page Does Not Exist</h1>'
        })
    });
    
// let url = 'https://api.themoviedb.org/3/search/person?';
// let apiKey = 'api_key=6e48f916ebbed02022fe4614ad964fb3&';
// let person = 'query=jack%20%nicholson';
// let final = $.get(url + apiKey + person);

// final.then((responseData) => {
//     console.log("Look at this", responseData.results);
// });

}

