myApp.controller('ServicesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	
	if(sessionStorage.getItem('token') && sessionStorage.getItem('userInfo'))
	{
		$scope.fetchData = function(){
			let servicesUrl = 'https://cors-anywhere.herokuapp.com/http://million-core-api.saffman.co.uk/api/v1.0/core/services/';
			let sessionData = {
				token:sessionStorage.getItem('token'),
				userInfo:sessionStorage.getItem('userInfo')
			}
			$http.get(servicesUrl,
				{
					headers:{
						'Content-Type': 'application/json',
						'Authorization':"JWT " + sessionData.token
					},
				}
				).then(resData=>{
					console.log(resData);
				$scope.servicesResData = resData;
			})
		}

	}else{
		$location.path('/login');
	}

	
}]);