(function() {
    angular.module('punann')
       .controller('MenuController', ['$translate', 'menuService', function($translate, menuService) {
           this.getItems = function() {
               return menuService.menu;
           };
        }])
})();
