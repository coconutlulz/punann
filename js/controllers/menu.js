(function() {
    angular.module('punann')
       .controller('MenuController', ['$translate', '$location', 'menuService', function($translate, $location, menuService) {
           this.getItems = function() {
               return menuService.menu;
           };

           this.checkSelected = function(page) {
               var selectedPage = '.' + $location.path().slice(1);
               return selectedPage === page;
            };
        }])
})();
