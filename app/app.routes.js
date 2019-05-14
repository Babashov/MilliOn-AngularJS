myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'LoginController',
		templateUrl: 'app/components/login/loginView.html'
	})

	$routeProvider.when('/login',{
		controller:'LoginController',
		templateUrl:'app/components/login/loginView.html'
	})

	$routeProvider.when('/services', {
		controller:'ServicesController',
		templateUrl: 'app/components/services/servicesView.html'
	})

	$routeProvider.when('/favorites',{
		controller:'FavoritesController',
		templateUrl:'app/components/favorites/favoritesView.html'
	})

	
	.otherwise({
		redirectTo: '/'
	});
});