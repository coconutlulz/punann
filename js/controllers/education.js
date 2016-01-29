(function() {
    angular.module('punann')
        .controller('EducationController', ['$translate', function($translate) {
            var controller = this;
            $translate(['EDUCATION.FORMAL.DCU.INSTITUTION',
                    'EDUCATION.FORMAL.DCU.TITLE',
                    'EDUCATION.FORMAL.DCU.DATERANGE',
                    'EDUCATION.FORMAL.DCU.GRADEDESCRIPTION',
                    'EDUCATION.FORMAL.DCU.NOTES',
                    'EDUCATION.FORMAL.OU.INSTITUTION',
                    'EDUCATION.FORMAL.OU.TITLE',
                    'EDUCATION.FORMAL.OU.DATERANGE',
                    'EDUCATION.FORMAL.OU.GRADE',
                    'EDUCATION.FORMAL.OU.GRADEDESCRIPTION',
                    'EDUCATION.FORMAL.OU.NOTES',
                    'EDUCATION.FORMAL.LC.INSTITUTION',
                    'EDUCATION.FORMAL.LC.TITLE',
                    'EDUCATION.FORMAL.LC.DATERANGE',
                    'EDUCATION.INFORMAL.CNAG.INSTITUTION',
                    'EDUCATION.INFORMAL.CNAG.TITLE1',
                    'EDUCATION.INFORMAL.CNAG.TITLE2',
                    'EDUCATION.INFORMAL.CNAG.TITLE3',
                    'EDUCATION.INFORMAL.CNAG.DATERANGE1',
                    'EDUCATION.INFORMAL.CNAG.DATERANGE2',
                    'EDUCATION.INFORMAL.CNAG.DATERANGE3',
                    'EDUCATION.INFORMAL.CNAG.NOTES']).then(function(translations) {

                controller.formal = [
                    {
                        institution: translations['EDUCATION.FORMAL.OU.INSTITUTION'],
                        title: translations['EDUCATION.FORMAL.OU.TITLE'],
                        link: 'http://www.open.ac.uk/courses/qualifications/q64',
                        dateRange: translations['EDUCATION.FORMAL.OU.DATERANGE'],
                        grade: translations['EDUCATION.FORMAL.OU.GRADE'],
                        gradeDescription: translations['EDUCATION.FORMAL.OU.GRADEDESCRIPTION']
                    },
                    {
                        institution: translations['EDUCATION.FORMAL.DCU.INSTITUTION'],
                        title: translations['EDUCATION.FORMAL.DCU.TITLE'],
                        link: 'http://www.computing.dcu.ie/undergraduate/ca/bsc-computer-applications-dc121',
                        dateRange: translations['EDUCATION.FORMAL.DCU.DATERANGE'],
                        grade: '2.1',
                        gradeDescription: translations['EDUCATION.FORMAL.DCU.GRADEDESCRIPTION']
                    },
                    {
                        institution: translations['EDUCATION.FORMAL.LC.INSTITUTION'],
                        title: translations['EDUCATION.FORMAL.LC.TITLE'],
                        link: 'http://www.coolminecs.ie',
                        dateRange: translations['EDUCATION.FORMAL.LC.DATERANGE']
                    }
                ];
            })
        }])
})();
