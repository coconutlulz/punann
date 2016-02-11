(function() {
    angular.module('punann')
        .service('nameService', function() {
            this.firstName = 'David';
            this.fade = false;

            this.nameIndex = 0;
            this.surnames = [
                'Lynam',
                'Ó Laıġeanáın'
            ];

            var service = this;
            this.getFirstName = function() {
                return service.firstName;
            };

            this.getCurrentSurname = function() {
                return service.surnames[service.nameIndex];
            };

            this.getNextSurname = function() {
                return service.surnames[(service.nameIndex + 1) % service.surnames.length];
            };

            this.getFade = function() {
                return service.fade;
            };

            this.setCurrentSurname = function(surname) {
                service.currentSurname = surname;
            };

            this.setNextSurname = function(surname) {
                service.nextSurname = surname;
            };

            this.shiftNameIndex = function() {
                service.nameIndex = (service.nameIndex + 1) % service.surnames.length;
            };

            this.toggleFade = function() {
                service.fade = !service.fade;
            };
        })
    }
)();
