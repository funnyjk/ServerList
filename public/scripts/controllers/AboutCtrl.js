angular.module('AboutCtrl', [])
	.controller('AboutCtrl', function($scope) {
	
	$scope.myInterval = 5000;
	var slides = $scope.slides = [];
	
	$scope.w = 1200;
	$scope.h = 500;
	
	$scope.addSlide = function() {
	  var newWidth = $scope.w + slides.length;
	  slides.push({
	    image: 'http://placekitten.com/' + newWidth + '/' + $scope.h,
	    text: ['Tech Commandos'][slides.length % 4]
	  });
	};
	for (var i=0; i<3; i++) {
	  $scope.addSlide();
	}
});
