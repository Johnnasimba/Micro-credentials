
var app = angular
    .module('appModule', [])
    .config(function ($sceProvider) {
        $sceProvider.enabled(false);
    })
   
    .controller('AppController', function ($scope, $http) {  
        // Fetching data from static json file
        $http.get('scripts/data.json').then(function(response) {
            $scope.certificates = response.data;
          })
        
        
        $scope.search = '';

    });



