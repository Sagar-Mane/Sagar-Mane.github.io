var app = angular.module('myapp', ['ngRoute']);
app.config(function($routeProvider) {
	console.log("in route provider");
	$routeProvider
	.when("/portfolio", {
		templateUrl : "templates/portfolio.html",
		controller : "portfolio_controller"
	}).when("/photography", {
		templateUrl : "templates/photography.html",
		controller : "photography_controller"
	}).when("/blog", {
		templateUrl : "templates/blog.html",
		controller : "blog_controller"
	});
});

app.controller("portfolio_controller",function($scope,$http){
	console.log("Reporting from portfolio controller");
});

app.controller("photography_controller",function($scope){
   console.log("Reporting from photography controller") 
});

app.controller("blog_controller",function($scope){
   console.log("Reporting from blog controller"); 
});