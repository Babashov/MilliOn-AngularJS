myApp.controller('LoginController',['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	
    $scope.login = function()
    {
        

        if($scope.loginParam && $scope.loginParam.password && $scope.loginParam.mobileNumber)
        {
            let param = JSON.stringify($scope.loginParam)
            let loginUrl = 'https://cors-anywhere.herokuapp.com/http://million-core-api.saffman.co.uk/api/v1.0/accounts/login/';
            var req = {
                method: 'POST',
                url: loginUrl,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                data:{
                    phone_number : $scope.loginParam.mobileNumber,
                    password:$scope.loginParam.password
                }
               }

               $http(req)
                .then(res=>{
                    if(res.status == 200)
                    {
                        sessionStorage.setItem('token',res.data.token)
                        sessionStorage.setItem('userInfo',JSON.stringify(res.data.user));

                        $location.path('/services');
                    }
                    if(res.status == 400)
                    {
                        console.log('Bad Request To Url')
                    }

                    if(res.status == 401)
                    {
                        console.log('Permission Denied')
                    }

                    if(res.status == 404)
                    {
                        console.log('Not Found')
                    }
                })

                .catch(err=>console.log(err))
                

        }else{
            console.log('Login & Password cannot be empty')
        }
    }

    

	
}])