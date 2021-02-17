
var app = angular
    .module('appModule', [])
    .config(function ($sceProvider) {
        $sceProvider.enabled(false);
    })
    .controller('AppController', function ($scope, $http) {        
  
        var request = {
            method: 'get',
            url: 'https://www.encodedna.com/angularjs/tutorial/data.json',
            dataType: 'json',
            contentType: "application/json"
        };

        $scope.certificates = new Array;

        $http(request)
            .success(function (jsonData) {
                $scope.certificates = jsonData;
                $scope.list = $scope.certificates;
            })
            .error(function () {

            });
        
            $scope.search = '';

    });
