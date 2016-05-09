// Modules
(function(){
	var app = angular.module('RealEstateApp', ['ngRoute']);

	app.config(function ($routeProvider) {
		$routeProvider
			.when('/home',
				{
					controller: 'HomeCtrl',
					templateUrl: 'index.html'
				})
			.when('/projects',
				{
					controller: 'HomeCtrl',
					templateUrl: 'app/views/projects.html'
				})
			.otherwise({redirectTo: '/'});
	});
}());