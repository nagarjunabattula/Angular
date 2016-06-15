var _app =angular.module('mainApp',['ngRoute']);
_app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'html/login.html'
	})
	.when('/dashboard',{
		templateUrl:'html/dashboard.html'
	})
	.otherwise({
		redirectTo:'/'
	});
});
_app.controller('loginCntrl',function($scope,$location){
	$scope.submit=function(){
	var username= $scope.username;
	var password = $scope.password;
	if(username == "arju" && password=="ritu"){
	alert(username+password);
	$location.path("/dashboard");
	//window.location.hash="/dashboard";
	}else{
		alert("Wrong Stuff");
	}
	};
});