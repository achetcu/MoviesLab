"use strict";
{
    angular.module('app')
    .service('movieService', function($http){
        const service = this;
        service.moviename = [];
        service.movietitle = [];
        service.watch = [];
    
    
        service.newSearch = function(search, category){
            let url = 'https://api.themoviedb.org/3/';
            //let select = 'search/person'
            let select = category
            let apiKey = '?api_key=6e48f916ebbed02022fe4614ad964fb3&';
            let key = 'query=' + search;
            let final = $http.get(url + select + apiKey + key);
            
    
            
            final.then((responseData) => {
                service.moviename = responseData.data.results;
                
                // for(var i = 0; i<service.moviename.length; i++){
                //     service.movietitle = responseData.data.results[i].known_for
                // };
                console.log("This is the data", responseData.data);
                
                return service.moviename;
            
                
            
            });
                 
            }     
});

}