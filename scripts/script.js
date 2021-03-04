
// AngularJS
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
    

// Side-bar Navigation
window.addEventListener("load", () => {
    document.body.classList.remove("preload");
});

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav");

    document.querySelector("#btnNav").addEventListener("click", () => {
        nav.classList.add("nav--open");
    });

    document.querySelector(".nav__overlay").addEventListener("click", () => {
        nav.classList.remove("nav--open");
    });
});