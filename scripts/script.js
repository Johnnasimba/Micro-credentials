
var app = angular
    .module('appModule', ['angularUtils.directives.dirPagination'])
    .config(function ($sceProvider) {
        $sceProvider.enabled(false);
    })
   
    .controller('AppController', function ($scope, $http, $location,$anchorScroll) {  
        // Fetching data from static json file
        $http.get('scripts/data.json').then(function(response) {
            $scope.certificates = response.data;
          })   
        
        $scope.search = '';
        
        $scope.gotoTop = function () {
            $location.hash('header-navbar');
            $anchorScroll();
        }
    });




