(function() {
    angular.module('punann')
        .controller('EmailAddressController', [function() {
            var address = [
                'd', 'a', 'v', 'i', 'd',
                '.',
                'l', 'y', 'n', 'a', 'm',
                '@',
                'r', 'e', 'd', 'b', 'r', 'i', 'c', 'k',
                '.',
                'd', 'c', 'u',
                '.',
                'i', 'e'
            ];

            this.getChars = function() {
                return address;
            };
        }])
})();
