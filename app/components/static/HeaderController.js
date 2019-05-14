myApp.controller('StaticHeader',['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
    
    if(sessionStorage.getItem('token') && sessionStorage.getItem('userInfo'))
    {
    
        $scope.logout = function()
        {
            console.log('bura klik olundu')
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('userInfo');
            $location.path('/');
        }

        $scope.userInfoData = JSON.parse(sessionStorage.getItem('userInfo'));

    }

    

}])