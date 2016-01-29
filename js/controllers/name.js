angular.module('punann')
    .controller('NameController', ['$interval', 'nameService', function($interval, nameService) {
            this.firstName = nameService.getFirstName();

            this.getCurrentSurname = function() {
                return nameService.getCurrentSurname();
            };

            this.getFade = function() {
                return nameService.getFade();
            };

            function fadeNextName() {
                nameService.toggleFade();
                nameService.shiftNameIndex();
            }

            $interval(fadeNextName, 5000);
        }
    ])
