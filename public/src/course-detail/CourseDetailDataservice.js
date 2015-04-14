(function() {
    'use strict';
    angular.module('fhu')
            .service('courseDetailDataService', ['$q', '$http', CourseDetailDataService]);
    /**
     * Courses DataService
     * Courses embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{loadAll: Function}}
     * @constructor
     */
    function CourseDetailDataService($q, $http) {

        
        var lessons =
                {id01: [
                        {
                            name: 'Grundlagen',
                            avatar: 'welpen.jpg',
                            videoId: 'DyMWLf71X0o',
                            content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.',
                            lesson: {
                                headerImg: './assets/courses/card_top/longieren01.jpg',
                                headerTitle: 'Grundlagen des Longierens',
                                description: 'Das Longieren mit Hund oder Longiertraining ist eine Trainingsform, bei der der Hund außen um einen Kreis läuft und dabei den Kommandos des Hundeführers folgt. Anhänger sehen darin eine Möglichkeit, die Bindung und Kommunikation zwischen Hund und Mensch (Hundeführer) herzustellen, zu verbessern und zu festigen.',
                                extendedDescription: 'Das Longieren erfolgt an einem abgesteckten Kreis, dessen Durchmesser je nach Größe des Hundes etwa 10 bis 30 Meter beträgt.[2] Der Hundeführer bewegt sich im Inneren des Kreises, der Anfängerhund wird an einer Leine geführt. Im Verlauf des Trainings lernt der Hund, sich ausschließlich außerhalb des Kreises zu bewegen und dabei auf die – in erster Linie körpersprachlich gegebenen – Signale des Hundeführers zu achten. Zum Aufbau dieses Verhaltens existieren verschiedene Ansätze (restriktiv aufgebaute Tabouzone Innenkreis,[3] Klickertraining). Bei allen Formen des Trainingsaufbaus wird Wert darauf gelegt, dass der Hund agiert und für richtiges Verhalten bestätigt wird (→ Konditionierung). In Erwartung der Bestätigung beginnt der Hund den Hundeführer genau zu beobachten. Er muss herausfinden, welches Verhalten für die Bestätigung nötig ist und wird nicht gelockt.[4]',
                                downloads: [
                                    { name: 'Geschichte und Herkunft (pdf)', url: './file.pdf', description: 'Die Wurzeln des Longierens. Vom Pferd zum Hund, lorem ipsum elitr, sed diam nonumy eirmod tempor.'}, 
                                    { name: 'Grundlagen (pdf)', url:'./file.pdf', description : 'Grundlagen über den Kreis, die Longe, Ziele und Voraussetzungen.'}
                                ]
                            }
                        },
                        {
                            name: 'Der Kreis',
                            avatar: 'junghunde.jpg',
                            videoId: 'XexJnJMwfLY',
                            content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.',
                            lesson: {
                                headerImg: 'http://placehold.it/750x250',
                                headerTitle: 'Lorem Ipsum',
                                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
                                extendedDescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'
                            }
                        },
                        {
                            name: 'Aufwärmen',
                            avatar: 'junghunde2.jpg',
                            videoId: 'edUjmxjBzfE',
                            content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.',
                            lesson: {
                                headerImg: 'http://placehold.it/750x250',
                                headerTitle: 'Lorem Ipsum',
                                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
                                extendedDescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'
                            }
                        },
                        {
                            name: 'Sitz am Kreis',
                            avatar: 'erwachsene.jpg',
                            videoId: 'XexJnJMwfLY',
                            content: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. Always hungry pelt around the house and up and down stairs chasing phantoms.',
                            lesson: {
                                headerImg: 'http://placehold.it/750x250',
                                headerTitle: 'Lorem Ipsum',
                                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
                                extendedDescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'
                            }
                        },
                        {
                            name: 'Longieren I',
                            avatar: 'longierenI.jpg',
                            videoId: 'pxAKBEdS-FE',
                            content: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.',
                            lesson: {
                                headerImg: 'http://placehold.it/750x250',
                                headerTitle: 'Lorem Ipsum',
                                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
                                extendedDescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'
                            }
                        },
                        {
                            name: 'Distanz aufbauen',
                            avatar: 'longierenII.jpg',
                            videoId: 'pxAKBEdS-FE',
                            content: "Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? Get a new driver's license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. You don't go out and make a living dressed like that in the middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit malesuada.",
                            lesson: {
                                headerImg: 'http://placehold.it/750x250',
                                headerTitle: 'Lorem Ipsum',
                                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
                                extendedDescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'
                            }
                        },
                        {
                            name: 'Ohne Longe',
                            avatar: 'clickI.jpg',
                            videoId: 'XexJnJMwfLY',
                            content: "Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? Get a new driver's license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. You don't go out and make a living dressed like that in the middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit malesuada.",
                            lesson: {
                                headerImg: 'http://placehold.it/750x250',
                                headerTitle: 'Lorem Ipsum',
                                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
                                extendedDescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'
                            }
                        }
                    ]}
        ;
        // Promise-based API
        return {
            loadAllLessons: function(key) {
                return $http.get('/' + key);
                
            },
            
            loadLesson: function(course, lesson){
                return $http.get('/' + course + '/' + lesson);
                
            }
        };
        
    }

})();
