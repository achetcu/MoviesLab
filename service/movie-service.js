"use strict";
{
    angular.module('app')
    .service('movieService', function($http){
        const service = this;
        service.moviename = [];
        //let responseData = [];
        //service.apicall = responseData;
        
        //service.resultslist = result;
    
        service.newSearch = function(search){

            let url = 'https://api.themoviedb.org/3/';
            let select = 'search/movie'
            let apiKey = '?api_key=6e48f916ebbed02022fe4614ad964fb3&';
            let person = 'query=' + search;
            let final = $http.get(url + select + apiKey + person);
            //https://developers.themoviedb.org/3/genres/get-movie-list
    
            
            final.then((responseData) => {
                service.moviename = responseData.data.results;
                console.log("This is the data", responseData.data);
                
                return service.moviename
            
                //return responseData;
            
            });
           // });
            // $ctrl.addPost = function(final){
            //     $ctrl.movieList.push(final);
            //                     };
            }     
});

}