'use strict'

/* Controllers */

var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('InstrumentListCtrl', function ($scope, $http) {
	$http.get('instruments/instruments.json').success(function(data) {
		$scope.instruments = data;
	});
	
//	$scope.orderProp = 'age';
});

myAppControllers.controller('HeaderController', function ($scope, $location) {
	$scope.isActive = function (viewLocation) {
		return viewLocation === $location.path();
	};
});
