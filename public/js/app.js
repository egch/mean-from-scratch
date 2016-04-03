var personApp = angular.module('person', ['ngRoute', 'ngResource']);

personApp.factory('Person', ['$resource', function($resource){
   return  $resource('http://localhost:3000/api/people/:_id', null,
   {
        'update': {method:'PUT'}
   });
 }]);

/* ********** controller section ********** */

personApp.controller('ListPeopleController',
    function ($scope, Person) {
        Person.query(function(data) {
            $scope.data = data;
        },
        function(error)
        {
            console.log('error: '+error);

        });
});


personApp.controller('NewPersonController',
    function ($scope, Person, $location) {
      $scope.save = function() {
         
          Person.save($scope.person).$promise.then(
              function (data) {
                  $location.path('/');
              },
              function (error) {
                  console.log(errror);
              });
      }
});

/* ********** route section ********** */
personApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
        	.when('/', {
                controller:  'ListPeopleController',
                templateUrl: 'views/list.html'
            })
            .when('/newperson', {
                controller:  'NewPersonController',
                templateUrl: 'views/addPerson.html'
            })
            .otherwise({
                redirectTo: '/'
            });

 }]);
