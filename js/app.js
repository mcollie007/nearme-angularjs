var app = angular.module('NearMeApp', ['leaflet-directive', 'ngRoute']);

app.config(function($routeProvider){

	$routeProvider
	.when('/', {
		templateUrl: 'views/main.html',
		controller: 'MainController',
		redirectTo: '/'

	}).when('/about', {
		controlle: 'AboutController',
		templateUrl: 'views/about.html'
	}).otherwise({
		redirectTo: '/'
	});


});