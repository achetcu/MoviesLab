"use strict";{
    angular.module('app')
    .controller('searchBarController', function(testService, testFactory){
        const $ctrl = this;
        // $ctrl.text = testService.testProperty;
        // $ctrl.factoryText = testFactory.testProperty;

        $ctrl.newSearch = function(){

        let url = 'https://api.themoviedb.org/3/';
        let select = 'search/' + category.value
        let apiKey = '?api_key=6e48f916ebbed02022fe4614ad964fb3&';
        let person = 'query=' + $ctrl.search;
        let final = $.get(url + select + apiKey + person);
        //https://developers.themoviedb.org/3/genres/get-movie-list

        
            final.then((responseData) => {
                console.log("This is the data", responseData.results[0].known_for);
                    console.log(final);
                            });
                                    };


        });
    
    }