angular.module('myApp.demo_controller', []).
	controller('TestController', function($scope) {
		$scope.salary = 1000;
		$scope.percentage = 0;
		$scope.result = function() {
			return $scope.salary * $scope.percentage * 0.01;
		};
		$scope.testArray = [{salary:'', percentage: ''}];
		$scope.agregarTexto = function(){$scope.testArray.push({salary: $scope.salary, percentage: $scope.percentage}); 
			$scope.salary = 'Done'; 
			$scope.percentage = 0;
		};
});