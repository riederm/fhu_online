(function() {
    'use strict';

    angular.module('fhu')
            .service('coursesService', ['$q', '$http', CoursesDataservice]);

    /**
     * Courses DataService
     * Courses embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{loadAll: Function}}
     * @constructor
     */
    function CoursesDataservice($q, $http) {
        var courses = [
            {
                id: 'id01',
                name: 'Welpenkurs',
                avatar: 'welpen.jpg',
                videoId: 'DyMWLf71X0o',
                content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
            },
            {
                id: 'id01',
                name: 'Junghunde I',
                avatar: 'junghunde.jpg',
                videoId: 'XexJnJMwfLY',
                content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
            },
            {
                id: 'id01',
                name: 'Junghunde II',
                avatar: 'junghunde2.jpg',
                videoId: 'edUjmxjBzfE',
                content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
            },
            {
                id: 'id01',
                name: 'Erwachsene Hunde',
                avatar: 'erwachsene.jpg',
                videoId: 'XexJnJMwfLY',
                content: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. Always hungry pelt around the house and up and down stairs chasing phantoms.'
            },
            {
                id: 'id01',
                name: 'Longieren I',
                avatar: 'longierenI.jpg',
                videoId: 'pxAKBEdS-FE',
                content: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.'
            },
            {
                id: 'id01',
                name: 'Longieren II',
                avatar: 'longierenII.jpg',
                videoId: 'pxAKBEdS-FE',
                content: "Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? Get a new driver's license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. You don't go out and make a living dressed like that in the middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit malesuada."
            },
            {
                id: 'id01',
                name: 'Click & Trick I',
                avatar: 'clickI.jpg',
                videoId: 'XexJnJMwfLY',
                content: "Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? Get a new driver's license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. You don't go out and make a living dressed like that in the middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit malesuada."
            }
            //{
//        name: 'Click & Trick II',
//        avatar: 'click02.jpeg',
//        videoId: 'XexJnJMwfLY',
//        content: "Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? Get a new driver's license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. You don't go out and make a living dressed like that in the middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit malesuada."
//      }
        ];

        // Promise-based API
        return {
            loadAll: function() {
                // Simulate async nature of real remote calls
                return $http.get('/courses');
                //return $q.when(courses);
            }
        };
    }

})();
