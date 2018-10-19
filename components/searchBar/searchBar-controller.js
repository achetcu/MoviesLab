"use strict";{
    angular.module('app')
    .controller('searchBarController', function(testService, testFactory){
        const $ctrl = this;
        $ctrl.text = testService.testProperty;
        $ctrl.factoryText = testFactory.testProperty;
 
        });
    
    }