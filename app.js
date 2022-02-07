var app = angular.module('skiApp', ['ngRoute','angular-toArrayFilter'])


.config(function($routeProvider, $sceProvider) {
    $sceProvider.enabled(false);
    $routeProvider 
        .when("/station/:stationUid", { 
            templateUrl : "pages/station.html" 
        })  
        .otherwise({ 
            templateUrl : "pages/home.html"  
        })
    })  




.controller('mainCtrl', function mainCtrl($scope, $http, $route, $routeParams) {
    
    this.$route = $route;
    this.$routeParams = $routeParams;   

    var data = new Array();  


    $http({
        method: 'GET',
        url: 'http://eislert.fr/martin/get_stations.php',
        }).then(function(response) {
            $scope.stations = response.data; 
    }  );   
    

  

    $scope.gotoStation = function(station_uid) {

        // Change la view pour afficher la fiche
        location.href = '#!station/' + station_uid; 
    
    }

    $scope.goToAccueil = function(){
        location.href = '#!';
    }

    $scope.transformNameInSize = function(station_name) {
        var size = 120 - station_name.length * 2;
        console.log(station_name + ' : ' + size);
        return size;
        
    }

    $scope.color = function(weather) {
        var color;
        if(weather == 'cloud'){
            color = 'gray';
        }else if (weather == 'sun'){
            color = 'orange';
        }else if (weather == 'cloud-sun'){
            color = '#fdd85d';
        }else if (weather == 'smog'){
            color = '#0d0807';
        }else if (weather == 'smog'){
            color = '#268aa5';
        }else if (weather == 'snowflake'){
            color = '#94e4f7';
        }else if (weather == 'cloud-sun-rain'){
            color = '#d0d0d0';
        }else if (weather == 'cloud-rain'){
            color = '#243b79';
        }

        console.log(weather);
        console.log(color);
        return color;
    }

});
   