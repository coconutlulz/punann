(function() {
    angular.module('punann')
        .controller('EducationController', [function($translate) {
            this.formalInstitutions = [
                {
                    name: 'OU', 
                    link: 'http://www.open.ac.uk/courses/qualifications/q64'
                },
                {
                    name: 'DCU',
                    link: 'http://www.computing.dcu.ie/undergraduate/ca/bsc-computer-applications-dc121'
                }
            ];
        }])
})();
