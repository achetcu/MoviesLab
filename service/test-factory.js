"use strict";
{
    angular.module('app')
    .factory('testFactory', function(){
        return {
            testProperty: 'This is another test'
        }
    });
}