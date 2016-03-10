'use strict';

var app = angular.module("app", ['ngRoute', 'ngCookies'])
.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'resources/components/home.html',
			controller : 'home'
		})
		.when('/about', {
			templateUrl : 'resources/components/about.html',
			controller : 'about'
		})
		.when('/template', {
			templateUrl : 'resources/components/template.html',
			controller : 'template'
		})
		.otherwise({
			redirectTo : '/'
		});
	/*$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
  });*/
}])
.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 75;   // always scroll by 50 extra pixels
}])
.factory('db', function($http) {
   return {
        getFoos: function() {
             //return the promise directly.
             return $http.get('resources/ajax/getUsers.php')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data;
                        });
        }
   }
});
