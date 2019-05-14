myApp.controller('FavoritesController',['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	
	if(sessionStorage.getItem('token') && sessionStorage.getItem('userInfo'))
	{
		$scope.favoritesFetch = function(){
			let favoritesUrl = 'https://cors-anywhere.herokuapp.com/http://million-core-api.saffman.co.uk/api/v1.0/user-side/templates/';
			let sessionData = {
				token:sessionStorage.getItem('token'),
				userInfo:sessionStorage.getItem('userInfo')
			}
			$http.get(favoritesUrl,
				{
					headers:{
						'Content-Type': 'application/json',
						'Authorization':"JWT " + sessionData.token
					},
				}
				).then(resData=>{
					console.log(resData);
				$scope.favoritesData = resData;
			})
		}

	}else{
		$location.path('/login');
	}

	$scope.profileData = JSON.parse(sessionStorage.getItem('userInfo'))

	
}])