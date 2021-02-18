
var app = angular
    .module('appModule', [])
    .config(function ($sceProvider) {
        $sceProvider.enabled(false);
    })
   
    .controller('AppController', function ($scope, $http) {  
        // Fetching data from static json file
        $http.get('scripts/data.json').then(function(data) {
            $scope.certificates = data.data;
          })
        
        
        $scope.search = '';

    });



